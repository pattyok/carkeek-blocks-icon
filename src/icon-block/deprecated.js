/**
 * External dependencies
 */
 import classnames from 'classnames';

 /**
  * WordPress dependencies
  */
 import { useBlockProps } from "@wordpress/block-editor";
 /**
  * Internal dependencies
  */
 import svgs from './svgs';

const deprecated = [
    {
        attributes: {
			icon: {
			  type: "string",
			  default: ""
			},
			variation: {
			  type: "string",
			  default: ""
			},
			href: {
			  type: "string",
			  source: "attribute",
			  selector: "div > div > a",
			  attribute: "href"
			},
			rel: {
			  type: "string",
			  source: "attribute",
			  selector: "div > div > a",
			  attribute: "rel"
			},
			linkTarget: {
			  type: "string",
			  source: "attribute",
			  selector: "div > div > a",
			  attribute: "target"
			}
		},
		migrate( { icon } ) {
			return {
				icon: icon,
			};
		},
        save: ({ attributes }) => {
            const {
				icon,
				variation,
				contentAlign,
				href,
				linkTarget,
				rel,
			} = attributes;

			const blockProps = useBlockProps.save();

			const classes = classnames( blockProps.className, {
				[ `has-text-align-${ contentAlign }` ]: contentAlign,
			} );


			return (
				<div {...blockProps} className={ classes }>
					<div className={ 'wp-block-carkeek-blocks-icon__inner' }>
						{ typeof icon !== 'undefined' &&
							( href
								? <a href={ href } target={ linkTarget } rel={ rel }>
									{ svgs[ icon ] && svgs[ icon ].variation[ variation ] }
								</a>
								: svgs[ icon ] && svgs[ icon ].variation[ variation ]
							)
						}
					</div>
				</div>
			);
        },

    }
]

export default deprecated;
