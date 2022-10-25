/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import svg from './svgs';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { InspectorControls, URLInput } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, Tooltip, ToggleControl, RangeControl } from '@wordpress/components';



/**
 * Inspector controls
 */
function Inspector( props ) {
	// constructor() {
	// 	super( ...arguments );

	// 	this.state = { filteredIcons: svg, searchValue: '', isSearching: false };

	// 	this.onSetNewTab = this.onSetNewTab.bind( this );
	// }

	const [isSearching, setIsSearching] = useState( false );
	const [searchValue, setSearchValue] = useState( '' );
	const [filteredIcons, setFilteredIcons] = useState( svg );

	const {
		attributes,
		setAttributes,
	} = props;

	const {
		icon,
		variation,
		href,
		linkTarget,
	} = attributes;

	const setLinkTarget = ( value ) => {
		if ( ! value ) {
			setAttributes( { linkTarget: '_self' } );
		} else {
			setAttributes( { linkTarget: '_blank' } );
		}
	}

	const filterList = ( event ) => {
		const filtered = {};
		setIsSearching( true );
		setSearchValue( event );

		if ( event === '' ) {
			setIsSearching( false );
		}

		const updatedList = Object.entries( svg ).filter( function( item ) {
			const text = item[ 0 ] + ' ' + item[ 1 ].keywords;
			return text.toLowerCase().search(
				event.toLowerCase() ) !== -1;
		} );

		updatedList.forEach( ( [ key ] ) => {
			filtered[ key ] = svg[ key ].icon;
		} );
		setFilteredIcons ( filtered );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Icon settings', 'carkeek-blocks' ) }>
					<TextControl
						type="text"
						autoComplete="off"
						label={ __( 'Icon search', 'carkeek-blocks' ) }
						value={ searchValue }
						className="carkeek-blocks-icon-types-list__search"
						onChange={ ( evt ) => {
							filterList( evt );
						} }
					/>
					<div className="carkeek-blocks-icon-types-list-wrapper">
						<ul className="block-editor-block-types-list carkeek-blocks-icon-types-list">
							{ ! isSearching
								? <li className="block-editor-block-types-list__list-item selected-svg">
									<Button
										className="editor-block-list-item-button"
										onClick={ () => {
											return false;
										} }
									>
										<span className="block-editor-block-types-list__item-icon">
											{ icon && svg[ icon ].icon }
										</span>
									</Button>
								</li>
								: null
							}
							{ Object.keys( filteredIcons ).length > 0
								? Object.keys( filteredIcons ).map( ( keyName, i ) => {
									return (
										<li key={ `editor-pblock-types-list-item-${ i }` } className={ classnames(
											'block-editor-block-types-list__list-item', {
											},
										) }>
											<Tooltip text={ ( svg[ keyName ].label ) ? svg[ keyName ].label : keyName }>
												<Button
													isSecondary
													isPrimary={ icon && icon === keyName }
													className="editor-block-list-item-button"
													onClick={ () => {
														setAttributes( { icon: keyName } );
														setAttributes( { variation : svg[ keyName ].default });
														setAttributes( { selectedIcon : svg[ keyName ].svgIcon });
													} }
												>
													<span className="block-editor-block-types-list__item-icon">
														{ svg[ keyName ].icon }
													</span>
												</Button>
											</Tooltip>
										</li>
									);
								} )
								: <li className="no-results"> { __( 'No results found.', 'carkeek-blocks' ) } </li>
							}
						</ul>
					</div>
					{icon &&
					<div className="carkeek-blocks-icon-types-list-wrapper">
						<div className="carkeek-blocks-label">{ __( 'Variations:', 'carkeek-blocks') } </div>
						<ul className="block-editor-block-types-list carkeek-blocks-icon-types-list">
						{ Object.keys( svg[ icon ].variation ).length > 0
								? Object.keys(  svg[ icon ].variation ).map( ( keyName, i ) => {

									return (
										<li key={ `editor-pblock-types-list-item-${ i }` } className={ classnames(
											'block-editor-block-types-list__list-item', {
											},
										) }>
											<Tooltip text={ ( keyName ) }>
												<Button
													isSecondary
													isPrimary={ variation && variation === keyName }
													className="editor-block-list-item-button"
													onClick={ () => {
														setAttributes( { variation: keyName } );
														setAttributes( { selectedIcon: svg[ icon ].svgVariation[ keyName ] });
													} }
												>
													<span className="block-editor-block-types-list__item-icon">
														{ svg[ icon ].variation[ keyName ] }
													</span>
												</Button>
											</Tooltip>
										</li>
									);
								} )
								: <li className="no-results"> { __( 'No results found.', 'carkeek-blocks' ) } </li>
							}
						</ul>
					</div>

					}
				</PanelBody>
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
		</>
	);
}

export default Inspector;
