/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Controls from './controls';
import svgs from './svgs';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, URLInput } from '@wordpress/block-editor';

import { PanelBody, ToggleControl } from '@wordpress/components';
import { useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Set and export block values.
 */
function Edit( props ) {
	const {
        attributes,
		setAttributes
    } = props;
    const {
		icon,
		variation,
		contentAlign,
		href,
		linkTarget,
    } = attributes;

	const blockProps = useBlockProps( );
	const classes = classnames( blockProps.className, {
		[ `has-text-align-${ contentAlign }` ]: contentAlign,
	} );

	const displayIcon = icon ? svgs[ icon ].variation[ variation ] : svgs.icons.icon;

	const setLinkTarget = ( value ) => {
		if ( ! value ) {
			setAttributes( { linkTarget: '_self' } );
		} else {
			setAttributes( { linkTarget: '_blank' } );
		}
	}
	return (
		<div { ...blockProps }>

				<Inspector
					{ ...props }
				/>
				<InspectorControls>
				<PanelBody
					title={ __( 'Link settings', 'carkeek-blocks' ) }
					initialOpen={ false } >
					<URLInput
						value={href}
						onChange={ ( href ) => setAttributes( { href } ) }
						label={__("Link URL", "carkeek-blocks")}
					/>
					<ToggleControl
						label={ linkTarget ? __( 'Opening in new tab', 'carkeek-blocks' ) : __( 'Open in new tab', 'carkeek-blocks' ) }
						onChange={ ( val ) => setLinkTarget( { val } ) }
						checked={ linkTarget === '_blank' } />
				</PanelBody>
				</InspectorControls>


				<Controls
					{ ...props }
				/>
				<ServerSideRender
					block="carkeek-blocks/icon-block"
					attributes={ attributes }
				/>
		</div>
	);

}

export default  Edit;
