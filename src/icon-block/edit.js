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
import { useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Set and export block values.
 */
function Edit( props ) {
	const {
        attributes
    } = props;
    const {
		icon,
		variation,
		contentAlign
    } = attributes;

	const blockProps = useBlockProps();
	const classes = classnames( blockProps.className, {
		[ `has-text-align-${ contentAlign }` ]: contentAlign,
	} );

	const displayIcon = icon ? svgs[ icon ].variation[ variation ] : svgs.icons.icon;
	return (
		<div { ...blockProps }>

				<Inspector
					{ ...props }
				/>


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
