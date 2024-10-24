/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useBlockProps, InspectorControls, __experimentalUseColorProps as useColorProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useMergeRefs, useRefEffect } from '@wordpress/compose';
import { useState, useRef } from '@wordpress/element';

import Inspector from '../icon-block/inspector';
import "./editor.scss";

/**
 * Add the attributes needed for button icons.
 *
 * @since 0.1.0
 * @param {Object} settings
 */
function addAttributes( settings ) {
	if ( 'core/button' !== settings.name ) {
		return settings;
	}

	// Add the block visibility attributes.
	const iconAttributes = {
		addIcon: {
			type: 'boolean',
			default: false
		},
		icon: {
			type: 'string',
		},
		variation: {
			type: 'string',
		},
		iconPositionLeft: {
			type: 'boolean',
			default: false,
		}
	};

	const newSettings = {
		...settings,
		edit(props) {
			const { attributes, setAttributes } = props;
			const { icon, variation, iconPositionLeft, addIcon } = attributes;
			const colorProps = useColorProps( attributes );
			let iconDiv = '';
			let iconDivLeft = '';
			let buttonClass = '';
			if ( addIcon  ) {
				const iconStyle = 'fa-' + icon + ' fa-' + variation;
				if (iconPositionLeft) {
					iconDivLeft = <i className={ iconStyle }></i>;

				} else {
					iconDiv = <i className={ iconStyle }></i>;
				}

				buttonClass = 'wp-block-button__link wp-block-button__link--icon';
			}
			const blockProps = useBlockProps(
				{ className: buttonClass }
			);
			return (
				<div
				{ ...blockProps }
				style = { colorProps.style }
			>

				{iconDivLeft}

				{settings.edit(props)}

				{iconDiv}

			</div>

			)
		},
		attributes: {
			...settings.attributes,
			...iconAttributes,
		},
	};

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'enable-button-icons/add-attributes',
	addAttributes
);

/**
 * Filter the BlockEdit object and add icon inspector controls to button blocks.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
 */
function addInspectorControls( BlockEdit ) {
	return ( props ) => {
		if ( props.name !== 'core/button' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { addIcon, icon, variation, iconPositionLeft } = attributes;

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'Icon settings', 'enable-button-icons' ) }>
						<ToggleControl
							label={ __( 'Add icon', 'enable-button-icons' ) }
							checked={ addIcon }
							onChange={ ( value ) => setAttributes( { addIcon: value } ) }
						/>
						{ addIcon && (
						<ToggleControl
							label={ __( 'Place Icon Left', 'enable-button-icons' ) }
							checked={ iconPositionLeft }
							onChange={ ( value ) => setAttributes( { iconPositionLeft: value } ) }
						/>
						)}
					</PanelBody>
				</InspectorControls>

				{ addIcon && (
				<Inspector { ...props } />
			)}
			</>
		);
	};
}

addFilter(
	'editor.BlockEdit',
	'enable-button-icons/add-inspector-controls',
	addInspectorControls
);

/**
 * Add icon and position classes in the Editor.
 *
 * @since 0.1.0
 * @param {Object} BlockListBlock
 */
function addClasses( BlockListBlock ) {
	return ( props ) => {
		const { name, attributes } = props;

		if ( 'core/button' !== name || ! attributes?.icon ) {
			return <BlockListBlock { ...props } />;
		}
		console.log( 'attributes', attributes );
		const classes = classnames( props?.className, {
			[ `fa-${ attributes?.icon }` ]: attributes?.icon,
			[ `fa-${ attributes?.variation }` ]: attributes?.variation,
			'has-icon-position__left': attributes?.iconPositionLeft,
		} );

		return <BlockListBlock { ...props } className={ classes } />;
	};
}

// addFilter(
// 	'editor.BlockListBlock',
// 	'enable-button-icons/add-classes',
// 	addClasses
// );
