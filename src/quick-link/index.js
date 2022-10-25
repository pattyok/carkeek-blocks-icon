import "./style.scss";
import "./editor.scss";
import icons from './icon';
import metadata from './block.json';

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import deprecated from "./deprecated";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

registerBlockType(metadata, {
    icon: icons.landingPage,

    parent: ["carkeek-blocks/quick-link"],

    keywords: [__("link", "carkeek-blocks"), __("quick", "carkeek-blocks"), __("i would like to", "carkeek-blocks"), __("icon", "carkeek-blocks")],

    deprecated,

    save: ({ attributes }) => {
        const {
            linkTitle,
            linkUrl,
			newWindow
        } = attributes;

		const linkTarget = newWindow ? '_blank' : '_self';

        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps} >
                {linkUrl
                    ? <a className={"ck-quick-link"}
						href={linkUrl}
						target={newWindow && '_blank'} // Initial test
						rel={newWindow && 'noopener noreferrer'}  // Add this to fix
						>
                        <InnerBlocks.Content />
                        <span className={"ck-quick-link-title"}>{linkTitle }</span>
                        </a>
                    :  <>
                        <InnerBlocks.Content />
                        <span className={"ck-quick-link-title"}>{linkTitle }</span>
                        </>
                }
            </div>
        );
    },

    edit
});
