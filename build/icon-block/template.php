<?php
/** Template file for the icon block */

?>
<?php
	$icon      = ! empty( $attributes['icon'] ) ? $attributes['icon'] : 'icons';
	$variation = ! empty( $attributes['variation'] ) ? $attributes['variation'] : 'regular';
	$icon_el   = '<i class="fa-' . $icon . ' fa-' . $variation . '"> </i>';
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ( isset( $attributes['link'] ) ) { ?>
		<a href="<?php echo esc_url( $attributes['link'] ); ?>">
			<?php echo wp_kses_post( $icon_el ); ?>
		</a>
	<?php } else { ?>
		<?php echo wp_kses_post( $icon_el ); ?>
	<?php } ?>
</div>
