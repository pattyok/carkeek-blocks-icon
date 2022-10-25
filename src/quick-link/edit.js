
import {
    URLInput,
    InnerBlocks,
    useBlockProps,
	InspectorControls
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    TextControl,
	ToggleControl,
	PanelBody
} from "@wordpress/components";

function QuickLinkEdit( props ) {

    const {
        attributes,
        isSelected,
        setAttributes
    } = props;
    const {
        linkUrl,
        linkTitle,
		newWindow
    } = attributes;

    const linkStyle = linkUrl ? 'is-link' : 'is-placeholder';

    const blockProps = useBlockProps();

    return (
            <div { ...blockProps }>
				<InspectorControls>
				<PanelBody title={ __( 'Link settings', 'carkeek-blocks' ) }>
					<ToggleControl
						label={ newWindow ? __( 'Opening in new tab', 'carkeek-blocks' ) : __( 'Open in new tab', 'carkeek-blocks' ) }
						onChange={ ( newWindow ) => setAttributes( { newWindow } ) }
						checked={ newWindow } />
				</PanelBody>
				</InspectorControls>
                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/icon-block"]}
                    template={[
                        ["carkeek-blocks/icon-block", {className: 'is-style-circled'}]
                    ]}
                    templateLock={true}
                />

                {isSelected ?
                <>
                        <TextControl
                            className={
                                "link__title_edit"
                            }
                            onChange={ ( linkTitle ) => setAttributes( { linkTitle } ) }
                            value={linkTitle}
                            label={__(
                                "Link Title",
                                "carkeek-blocks"
                            )}
                        />

                        <URLInput
                            value={linkUrl}
                            onChange={ ( linkUrl ) => setAttributes( { linkUrl } ) }
                            label={__("Links To", "carkeek-blocks")}
                        />
                </>
                :   <div className={ `quick-link ${linkStyle} `} >{ linkTitle ? linkTitle : 'Click to Edit' }</div>
                }
            </div>
    );
}

export default QuickLinkEdit;
