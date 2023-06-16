/**
 * Internal dependencies
 */
import "./style.scss";
import "./editor.scss";
import edit from './edit';

import deprecated from "./deprecated";
import icons from './blockicon';


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from "@wordpress/blocks";
import metadata from './block.json';


registerBlockType(metadata, {
	icon: icons.iconBlock,
	keywords: [
		'icon',
		'svg',
        'font',
        'awesome'
	],
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'carkeek-blocks/icon' ],
				transform: ( attributes, innerBlocks ) => {
					console.log(innerBlocks);
					return createBlock( 'carkeek-blocks/icon-block', {
						...attributes,
					} );
				}
			}
		]
	},
    styles: [
		{
			name: 'circled',
			/* translators: block style */
			label: __( 'Circled', 'carkeek-blocks' ),
		},
		{
			name: 'small',
			/* translators: block style */
			label: __( 'Small', 'carkeek-blocks' ),
		},
	],
	edit,

});
