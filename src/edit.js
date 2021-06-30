/**
 * External Dependencies
 */
import isEqual from 'lodash.isequal';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { Component } from '@wordpress/element';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { select, dispatch, withSelect } from '@wordpress/data';

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

class CollapsibleSection extends Component {
	initialLoad = true;

	componentDidMount() {
		this.isStillMounted = true;
	}

	componentDidUpdate( ) {
		const { attributes, clientId, setAttributes } = this.props;
		const innerBlocks = select('core/block-editor').getBlocks(clientId);

		if( ! isEqual( innerBlocks, attributes.innerBlocks ) ) {
			setAttributes( { innerBlocks } );
		}
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		const { attributes, setAttributes, clientId } = this.props;
		const { title, innerBlocks } = attributes;
		const blocks = select('core/block-editor').getBlocks(clientId);

		if( this.initialLoad && ! blocks.length && innerBlocks.length ) {
			dispatch('core/block-editor').replaceInnerBlocks(clientId, innerBlocks, false);
			this.initialLoad = ! this.initialLoad;
		}

		const onChangeTitle = ( title ) => {
			setAttributes( { title } );
		};

		return [
			<>
				<InspectorControls key="inspector">
					<PanelBody title={__('Collapsible Section', 'innocode-block-collapsible-section')}>
						<TextControl
							label={__('Title', 'innocode-block-collapsible-section')}
							type="text"
							value={title}
							onChange={onChangeTitle}
						/>
					</PanelBody>
				</InspectorControls>
			</>,
			<div className="block-collapsible-section block-collapsible-section--is-opened">
				<div className="block-collapsible-section__heading">
					{title}
				</div>
				<div className="block-collapsible-section__content">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</div>
			</div>
		];
	}
}

export default withSelect( ( select, props ) => {
	return {
		innerBlocks: select( 'core/block-editor' ).getBlocks( props.clientId )
	};
} ) ( props =>
	<div { ...useBlockProps( {
		className: `wp-block-innocode-collapsible-section`,
	} ) }>
		<CollapsibleSection {...props}/>
	</div>
);
