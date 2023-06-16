import "./style.scss";
import { registerBlockType, createBlock } from "@wordpress/blocks";
import icons from "./icon";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import deprecated from "./deprecated";
import metadata from "./block.json";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";


registerBlockType(metadata, {
    icon: icons.pageLinks,

    parent: ["carkeek-blocks/widget-row"],

    category: "widgets",

    keywords: [__("link", "carkeek-blocks"), __("page", "carkeek-blocks"), __("landing page", "carkeek-blocks"), __("icon", "carkeek-blocks")],

    deprecated,

	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'carkeek-blocks/page-link' ],
				transform: ( attributes, innerBlocks ) => {
					console.log(innerBlocks);
					return createBlock( 'carkeek-blocks/landing-page-link-icon', {
						...attributes
					} );
				}
			}
		]
	},

    save: ({ attributes }) => {
        const {
            linkTitle,
            linkUrl,
            pageIntro,
        } = attributes;

        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps } >
                <InnerBlocks.Content />
				<RichText.Content className="ck-page-link-title" tagName="h3" value={ linkTitle } />
                <RichText.Content className="ck-page-link-description" tagName="p" value={ pageIntro } />
            </div>
        );
    },

    edit
});
