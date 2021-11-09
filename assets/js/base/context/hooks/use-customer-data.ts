/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useEffect, useState, useCallback, useRef } from '@wordpress/element';
import { CART_STORE_KEY as storeKey } from '@woocommerce/block-data';
import { useDebounce } from 'use-debounce';
import isShallowEqual from '@wordpress/is-shallow-equal';
import {
	formatStoreApiErrorMessage,
	pluckAddress,
	pluckEmail,
} from '@woocommerce/base-utils';
import type {
	CartResponseBillingAddress,
	CartResponseShippingAddress,
} from '@woocommerce/types';

declare type CustomerData = {
	billingData: CartResponseBillingAddress;
	shippingAddress: CartResponseShippingAddress;
};

/**
 * Internal dependencies
 */
import { useStoreCart } from './cart/use-store-cart';
import { useStoreNotices } from './use-store-notices';

function instanceOfCartResponseBillingAddress(
	address: CartResponseBillingAddress | CartResponseShippingAddress
): address is CartResponseBillingAddress {
	return 'email' in address;
}

/**
 * Does a shallow compare of important address data to determine if the cart needs updating on the server.
 *
 * This takes the current and previous address into account, as well as the billing email field.
 *
 * @param {Object} previousAddress An object containing all previous address information
 * @param {Object} address An object containing all address information
 *
 * @return {boolean} True if the store needs updating due to changed data.
 */
const shouldUpdateAddressStore = <
	T extends CartResponseBillingAddress | CartResponseShippingAddress
>(
	previousAddress: T,
	address: T
): boolean => {
	if (
		instanceOfCartResponseBillingAddress( address ) &&
		pluckEmail( address ) !==
			pluckEmail( previousAddress as CartResponseBillingAddress )
	) {
		return true;
	}

	return (
		!! address.country &&
		! isShallowEqual(
			pluckAddress( previousAddress ),
			pluckAddress( address )
		)
	);
};

/**
 * This is a custom hook for syncing customer address data (billing and shipping) with the server.
 */
export const useCustomerData = (): {
	billingData: CartResponseBillingAddress;
	shippingAddress: CartResponseShippingAddress;
	setBillingData: ( data: CartResponseBillingAddress ) => void;
	setShippingAddress: ( data: CartResponseShippingAddress ) => void;
} => {
	const { updateCustomerData } = useDispatch( storeKey );
	const { addErrorNotice, removeNotice } = useStoreNotices();

	// Grab the initial values from the store cart hook.
	const {
		billingAddress: initialBillingAddress,
		shippingAddress: initialShippingAddress,
	}: Omit< CustomerData, 'billingData' > & {
		billingAddress: CartResponseBillingAddress;
	} = useStoreCart();

	// State of customer data is tracked here from this point, using the initial values from the useStoreCart hook.
	const [ customerData, setCustomerData ] = useState< CustomerData >( {
		billingData: initialBillingAddress,
		shippingAddress: initialShippingAddress,
	} );

	// Store values last sent to the server in a ref to avoid requests unless important fields are changed.
	const previousCustomerData = useRef< CustomerData >( customerData );

	// Need to sync shipping and billing address from wp/store/cart to local state, because `customerData` is
	// populated before the wc/store/cart is hydrated. We only need to run this the first time they're out of sync
	// because subsequent times will be the result of this effect or client side changes.
	const [ hasCustomerDataSynced, setHasCustomerDataSynced ] = useState<
		boolean
	>( false );

	useEffect( () => {
		if (
			! hasCustomerDataSynced &&
			( ! isShallowEqual(
				customerData.billingData,
				initialBillingAddress
			) ||
				! isShallowEqual(
					customerData.shippingAddress,
					initialShippingAddress
				) )
		) {
			setHasCustomerDataSynced( true );
			const newCustomerData = {
				shippingAddress: initialShippingAddress,
				billingData: initialBillingAddress,
			};
			previousCustomerData.current = newCustomerData;
			setCustomerData( newCustomerData );
		}
	}, [
		initialBillingAddress,
		initialShippingAddress,
		customerData,
		hasCustomerDataSynced,
	] );
	// Debounce updates to the customerData state so it's not triggered excessively.
	const [ debouncedCustomerData ] = useDebounce( customerData, 1000, {
		// Default equalityFn is prevData === newData.
		equalityFn: ( prevData, newData ) => {
			return (
				isShallowEqual( prevData.billingData, newData.billingData ) &&
				isShallowEqual(
					prevData.shippingAddress,
					newData.shippingAddress
				)
			);
		},
	} );

	/**
	 * Set billing data.
	 *
	 * Contains special handling for email so those fields are not overwritten if simply updating address.
	 */
	const setBillingData = useCallback( ( newData ) => {
		setCustomerData( ( prevState ) => {
			return {
				...prevState,
				billingData: {
					...prevState.billingData,
					...newData,
				},
			};
		} );
	}, [] );

	/**
	 * Set shipping data.
	 */
	const setShippingAddress = useCallback( ( newData ) => {
		setCustomerData( ( prevState ) => {
			return {
				...prevState,
				shippingAddress: {
					...prevState.shippingAddress,
					...newData,
				},
			};
		} );
	}, [] );

	/**
	 * This pushes changes to the API when the local state differs from the address in the cart.
	 */
	useEffect( () => {
		// Only push updates when enough fields are populated.
		if (
			! shouldUpdateAddressStore(
				previousCustomerData.current.billingData,
				debouncedCustomerData.billingData
			) &&
			! shouldUpdateAddressStore(
				previousCustomerData.current.shippingAddress,
				debouncedCustomerData.shippingAddress
			)
		) {
			return;
		}
		previousCustomerData.current = debouncedCustomerData;
		updateCustomerData( {
			billing_address: debouncedCustomerData.billingData,
			shipping_address: debouncedCustomerData.shippingAddress,
		} )
			.then( () => {
				removeNotice( 'checkout' );
			} )
			.catch( ( response ) => {
				addErrorNotice( formatStoreApiErrorMessage( response ), {
					id: 'checkout',
				} );
			} );
	}, [
		debouncedCustomerData,
		addErrorNotice,
		removeNotice,
		updateCustomerData,
	] );
	return {
		billingData: customerData.billingData,
		shippingAddress: customerData.shippingAddress,
		setBillingData,
		setShippingAddress,
	};
};
