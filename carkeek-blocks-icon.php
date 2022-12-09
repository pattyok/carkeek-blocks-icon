<?php
/**
 * Plugin Name:       Carkeek Blocks  - Icon Block
 * Description:       Installs the icon block and related blocks.
 * Plugin URI: https://github.com/pattyok/carkeek-blocks-icon
 * GitHub Plugin URI: pattyok/carkeek-blocks-icon
 * Primary Branch: main
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.05
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
	register_block_type(
		__DIR__ . '/build/icon-block',
		array(
			'render_callback' => 'carkeek_blocks_render_icon_block',
		)
	);
}
add_action( 'init', 'create_block_carkeek_blocks_icon_block_init' );

/**
 * Render the icon block.
 *
 * @param array $attributes The block attributes.
 *
 * @return string
 */
function carkeek_blocks_render_icon_block( $attributes ) {
	ob_start();
	require plugin_dir_path( __FILE__ ) . 'build/icon-block/template.php';
	return ob_get_clean();
}

