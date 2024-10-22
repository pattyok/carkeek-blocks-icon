<?php
/**
 * Plugin Name:       Carkeek Blocks  - Icon Block
 * Description:       Installs the icon block and related blocks.
 * Plugin URI: https://github.com/pattyok/carkeek-blocks-icon
 * GitHub Plugin URI: pattyok/carkeek-blocks-icon
 * Primary Branch: main
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.2.00
 * Author:            The Rhizome Collaborative
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       carkeek-blocks-icon
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_carkeek_blocks_icon_block_init() {
	register_block_type( __DIR__ . '/build/landing-page-link' );
	register_block_type( __DIR__ . '/build/quick-link' );

	/** Dynamic Blocks */
	/** This is dynamic so that we can update the icon set from font awesome when a new set is released. The svgs may get slightly altered from version to version.
	 *
	 * To update the icon set, download the whole font awesome package from https://fontawesome.com/download
	 * Then copy the icons.json from the metadata folder into the src folder for the icon block.
	 */
	register_block_type( __DIR__ . '/build/icon-block' );
}
add_action( 'init', 'create_block_carkeek_blocks_icon_block_init' );

/**
 * Enqueue Editor scripts and styles for the button plugin.
 */
function enable_button_icons_enqueue_block_editor_assets() {
	$asset_file  = include plugin_dir_path( __FILE__ ) . 'build/button-extension/index.asset.php';

	wp_enqueue_script(
		'enable-button-icons-editor-scripts',
		plugin_dir_url( __FILE__ ) . 'build/button-extension/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	// wp_set_script_translations(
	// 	'enable-button-icons-editor-scripts',
	// 	'enable-button-icons',
	// 	plugin_dir_path( __FILE__ ) . 'languages'
	// );

	wp_enqueue_style(
		'enable-button-icons-editor-styles',
		plugin_dir_url( __FILE__ ) . 'build/button-extension/index.css'
	);
}
add_action( 'enqueue_block_editor_assets', 'enable_button_icons_enqueue_block_editor_assets' );


/**
 * Render icons on the frontend.
 */
function enable_button_icons_render_block_button( $block_content, $block ) {
	if ( ! isset( $block['attrs']['icon'] ) ) {
		return $block_content;
	}

	$icon         = $block['attrs']['icon'];
	$positionLeft = isset( $block['attrs']['iconPositionLeft'] ) ? $block['attrs']['iconPositionLeft'] : false;
	$variation	= isset( $block['attrs']['variation'] ) ? $block['attrs']['variation'] : 'regular';
	$align = isset( $block['attrs']['iconPositionLeft'] ) && $block['attrs']['iconPositionLeft'] ? 'left' : 'right';
	$icon_el   = '<i class="fa-' . $icon . ' fa-' . $variation . '"> </i>';
	// Append the icon class to the block.
	$p = new WP_HTML_Tag_Processor( $block_content );
	if ( $p->next_tag() ) {
		$p->add_class( 'has-icon-' . $align );
	}
	$block_content = $p->get_updated_html();

	// Add the SVG icon either to the left of right of the button text.
	$block_content = $positionLeft
		? preg_replace( '/(<a[^>]*>)(.*?)(<\/a>)/i', '$1' . $icon_el . '$2$3', $block_content )
		: preg_replace( '/(<a[^>]*>)(.*?)(<\/a>)/i', '$1$2' . $icon_el . '$3', $block_content );

	return $block_content;
}
add_filter( 'render_block_core/button', 'enable_button_icons_render_block_button', 10, 2 );