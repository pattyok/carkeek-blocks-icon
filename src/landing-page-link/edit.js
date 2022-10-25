import classnames from 'classnames';
import {
    URLInput,
    InnerBlocks,
    RichText,
    useBlockProps
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    TextControl,
} from "@wordpress/components";



export default function QuickLinkEdit( props ) {
    const {
        attributes,
        isSelected,
        setAttributes,
    } = props;
    const {
        linkUrl,
        linkTitle,
        pageIntro,
    } = attributes;

    const blockProps = useBlockProps();

    return (
		 <div { ...blockProps }>

                        <InnerBlocks
                            allowedBlocks={["carkeek-blocks/icon", "carkeek-blocks/icon-block"]}
                            template={[
                                ["carkeek-blocks/icon-block", {className: 'is-style-small'}]
                            ]}
                            templateLock={true}
                        />

						<RichText
							className={
								"ck-page-link-editor"
							}
							allowedFormats={ [ 'core/link' ] }
							onChange={ ( linkTitle ) => setAttributes( { linkTitle } ) }
							value={linkTitle}
							tagName="h3"
							label={__(
								"Link Title",
								"carkeek-blocks"
							)}
							placeholder={ __( 'Set the title and link.' ) }
						/>

						<RichText
							className={'ck-page-link-description'}
							tagName="p"
							value={ pageIntro }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( pageIntro ) => setAttributes( { pageIntro } ) }
							placeholder={ __( 'Add a page description.' ) }
						/>

            </div>

    );
}



