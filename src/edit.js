import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import { select, withSelect } from '@wordpress/data';
import { applyFilters } from "@wordpress/hooks";

import './editor.scss';

const ALLOWED_BLOCKS = applyFilters(
	'innocode.block-collapsible-section.allowed-blocks',
	[
		'core/paragraph',
		'core/heading',
		'core/separator',
		'core/spacer'
	]
);

export default function edit( { attributes, setAttributes } ) {
	const { title } = attributes;

	return (
		<div {...useBlockProps({
			className: `wp-block-innocode-collapsible-section`,
		})}>
			<div className="block-collapsible-section block-collapsible-section--is-opened">
				<div className="block-collapsible-section__heading">
					<RichText
						tagName="h5"
						value={ title }
						allowedFormats={ [ 'core/italic' ] }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Heading...' ) }
					/>
				</div>
				<div className="block-collapsible-section__content">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</div>
			</div>
		</div>
	);
}

