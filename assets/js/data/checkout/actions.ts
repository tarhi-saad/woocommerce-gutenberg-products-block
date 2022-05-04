/**
 * External dependencies
 */
import { CheckoutResponse, PaymentResultDataType } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { ACTION_TYPES as types } from './action-types';
import { ActionType } from './types';
import { getPaymentResultFromCheckoutResponse } from '../../base/context/providers/cart-checkout/checkout-state/utils';

export const setPristine = () => ( {
	type: types.SET_PRISTINE,
} );

export const setIdle = () => ( {
	type: types.SET_IDLE,
} );

export const setProcessing = () => ( {
	type: types.SET_PROCESSING,
} );

export const setRedirectUrl = ( redirectUrl: string ) => ( {
	type: types.SET_REDIRECT_URL,
	redirectUrl,
} );

export const setProcessingResponse = ( data: PaymentResultDataType ) => ( {
	type: types.SET_PROCESSING_RESPONSE,
	data,
} );

export const setComplete = ( data: Record< string, unknown > = {} ) => ( {
	type: types.SET_COMPLETE,
	data,
} );

export const setBeforeProcessing = () => ( {
	type: types.SET_BEFORE_PROCESSING,
} );

export const setAfterProcessing = () => ( {
	type: types.SET_AFTER_PROCESSING,
} );

export const processCheckoutResponse = ( response: CheckoutResponse ) => {
	return async ( {
		dispatch,
	}: {
		dispatch: React.Dispatch< ActionType >;
	} ) => {
		const paymentResult = getPaymentResultFromCheckoutResponse( response );
		dispatch( setRedirectUrl( paymentResult?.redirectUrl || '' ) );
		dispatch( setProcessingResponse( paymentResult ) );
		dispatch( setAfterProcessing() );
	};
};

export const setIsCart = ( isCart: boolean ) => ( {
	type: types.SET_IS_CART,
	isCart,
} );

export const setHasError = ( hasError = true ) => ( {
	type: types.SET_HAS_ERROR,
	hasError,
} );

export const incrementCalculating = () => ( {
	type: types.INCREMENT_CALCULATING,
} );

export const decrementCalculating = () => ( {
	type: types.DECREMENT_CALCULATING,
} );

export const setCustomerId = ( customerId: number ) => ( {
	type: types.SET_CUSTOMER_ID,
	customerId,
} );

export const setOrderId = ( orderId: number ) => ( {
	type: types.SET_ORDER_ID,
	orderId,
} );

export const setUseShippingAsBilling = ( useShippingAsBilling: boolean ) => ( {
	type: types.SET_SHIPPING_ADDRESS_AS_BILLING_ADDRESS,
	useShippingAsBilling,
} );

export const setShouldCreateAccount = ( shouldCreateAccount: boolean ) => ( {
	type: types.SET_SHOULD_CREATE_ACCOUNT,
	shouldCreateAccount,
} );

export const setOrderNotes = ( orderNotes: string ) => ( {
	type: types.SET_ORDER_NOTES,
	orderNotes,
} );

export const setExtensionData = (
	extensionData: Record< string, Record< string, unknown > >
) => ( {
	type: types.SET_EXTENSION_DATA,
	extensionData,
} );
