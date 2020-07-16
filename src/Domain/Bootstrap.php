<?php
/**
 * Contains the Bootstrap class
 *
 * @package WooCommerce/Blocks
 */

namespace Automattic\WooCommerce\Blocks\Domain;

use Automattic\WooCommerce\Blocks\Assets as BlockAssets;
use Automattic\WooCommerce\Blocks\Assets\Api as AssetApi;
use Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry;
use Automattic\WooCommerce\Blocks\Assets\BackCompatAssetDataRegistry;
use Automattic\WooCommerce\Blocks\Library;
use Automattic\WooCommerce\Blocks\Installer;
use Automattic\WooCommerce\Blocks\Registry\Container;
use Automattic\WooCommerce\Blocks\RestApi;
use Automattic\WooCommerce\Blocks\Payments\Api as PaymentsApi;
use Automattic\WooCommerce\Blocks\Payments\PaymentMethodRegistry;
use Automattic\WooCommerce\Blocks\Payments\Integrations\Stripe;
use Automattic\WooCommerce\Blocks\Payments\Integrations\Cheque;
use Automattic\WooCommerce\Blocks\Payments\Integrations\PayPal;
use Automattic\WooCommerce\Blocks\Domain\Services\DraftOrders;

/**
 * Takes care of bootstrapping the plugin.
 *
 * @since 2.5.0
 */
class Bootstrap {

	/**
	 * Holds the Dependency Injection Container
	 *
	 * @var Container
	 */
	private $container;

	/**
	 * Holds the Package instance
	 *
	 * @var Package
	 */
	private $package;

	/**
	 * Constructor
	 *
	 * @param Container $container  The Dependency Injection Container.
	 */
	public function __construct( Container $container ) {
		$this->container = $container;
		$this->package   = $container->get( Package::class );
		$this->init();
		/**
		 * Usable as a safe event hook for when the plugin has been loaded.
		 */
		do_action( 'woocommerce_blocks_loaded' );
	}

	/**
	 * Init the package - load the blocks library and define constants.
	 */
	protected function init() {
		if ( ! $this->has_core_dependencies() ) {
			return;
		}
		$this->define_feature_flag();
		$this->register_dependencies();
		$this->register_payment_methods();

		$is_rest = wc()->is_rest_api_request();

		// Load assets in admin and on the frontend.
		if ( ! $is_rest ) {
			$this->add_build_notice();
			$this->container->get( AssetDataRegistry::class );
			$this->container->get( Installer::class );
			BlockAssets::init();
		}
		$this->container->get( DraftOrders::class )->init();
		$this->container->get( PaymentsApi::class );
		$this->container->get( RestApi::class );
		Library::init();
	}

	/**
	 * Check core dependencies exist.
	 *
	 * @return boolean
	 */
	protected function has_core_dependencies() {
		return class_exists( 'WooCommerce' ) && function_exists( 'register_block_type' );
	}

	/**
	 * See if files have been built or not.
	 *
	 * @return bool
	 */
	protected function is_built() {
		return file_exists(
			$this->package->get_path( 'build/featured-product.js' )
		);
	}

	/**
	 * Add a notice stating that the build has not been done yet.
	 */
	protected function add_build_notice() {
		if ( $this->is_built() ) {
			return;
		}
		add_action(
			'admin_notices',
			function() {
				echo '<div class="error"><p>';
				printf(
					/* Translators: %1$s is the install command, %2$s is the build command, %3$s is the watch command. */
					esc_html__( 'WooCommerce Blocks development mode requires files to be built. From the plugin directory, run %1$s to install dependencies, %2$s to build the files or %3$s to build the files and watch for changes.', 'woo-gutenberg-products-block' ),
					'<code>npm install</code>',
					'<code>npm run build</code>',
					'<code>npm start</code>'
				);
				echo '</p></div>';
			}
		);
	}

	/**
	 * Define the global feature flag.
	 */
	protected function define_feature_flag() {
		$default_flag  = defined( 'WC_BLOCKS_IS_FEATURE_PLUGIN' ) ? '2' : '1';
		$allowed_flags = [ '1', '2', '3' ];

		if ( file_exists( __DIR__ . '/../../blocks.ini' ) ) {
			$woo_options = parse_ini_file( __DIR__ . '/../../blocks.ini' );
			$flag        = is_array( $woo_options ) && in_array( $woo_options['woocommerce_blocks_phase'], $allowed_flags, true ) ? $woo_options['woocommerce_blocks_phase'] : $default_flag;
		} else {
			$flag = $default_flag;
		}

		define( 'WOOCOMMERCE_BLOCKS_PHASE', intval( $flag ) );
	}

	/**
	 * Register core dependencies with the container.
	 */
	protected function register_dependencies() {
		$this->container->register(
			AssetApi::class,
			function ( Container $container ) {
				return new AssetApi( $container->get( Package::class ) );
			}
		);
		$this->container->register(
			AssetDataRegistry::class,
			function( Container $container ) {
				$asset_api        = $container->get( AssetApi::class );
				$load_back_compat = defined( 'WC_ADMIN_VERSION_NUMBER' )
					&& version_compare( WC_ADMIN_VERSION_NUMBER, '0.19.0', '<=' );
				return $load_back_compat
					? new BackCompatAssetDataRegistry( $asset_api )
					: new AssetDataRegistry( $asset_api );
			}
		);
		$this->container->register(
			PaymentMethodRegistry::class,
			function( Container $container ) {
				return new PaymentMethodRegistry();
			}
		);
		$this->container->register(
			PaymentsApi::class,
			function ( Container $container ) {
				$payment_method_registry = $container->get( PaymentMethodRegistry::class );
				$asset_data_registry     = $container->get( AssetDataRegistry::class );
				return new PaymentsApi( $payment_method_registry, $asset_data_registry );
			}
		);
		$this->container->register(
			RestApi::class,
			function ( Container $container ) {
				return new RestApi();
			}
		);
		$this->container->register(
			Installer::class,
			function ( Container $container ) {
				return new Installer();
			}
		);
		$this->container->register(
			DraftOrders::class,
			function( Container $container ) {
				return new DraftOrders( $container->get( Package::class ) );
			}
		);
	}

	/**
	 * Register payment method integrations with the container.
	 *
	 * @internal Stripe is a temporary method that is used for setting up payment method integrations with Cart and
	 *           Checkout blocks. This logic should get moved to the payment gateway extensions.
	 */
	protected function register_payment_methods() {
		$this->container->register(
			Stripe::class,
			function( Container $container ) {
				$asset_api = $container->get( AssetApi::class );
				return new Stripe( $asset_api );
			}
		);
		$this->container->register(
			Cheque::class,
			function( Container $container ) {
				$asset_api = $container->get( AssetApi::class );
				return new Cheque( $asset_api );
			}
		);
		$this->container->register(
			PayPal::class,
			function( Container $container ) {
				$asset_api = $container->get( AssetApi::class );
				return new PayPal( $asset_api );
			}
		);
	}
}
