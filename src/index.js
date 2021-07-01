import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

import './style.scss';
import {__} from "@wordpress/i18n";

registerBlockType( 'innocode/wp-block-collapsible-section', {
	attributes: {
		title: {
			type: 'string',
			default: '',
		},
		innerBlocks: {
			type: 'array',
			default: []
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
