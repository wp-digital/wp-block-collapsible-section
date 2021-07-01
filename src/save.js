import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save( {
			className: `wp-block-innocode-collapsible-section`,
		} ) }>
			<div className="block-collapsible-section__heading">
				<RichText.Content tagName="h5" value={ attributes.title } />
			</div>
			<div className="block-collapsible-section__content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
