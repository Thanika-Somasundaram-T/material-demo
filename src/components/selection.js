import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import config from '../core/config';
import context from '../core/context';

const style = {
	minWidth: 120,
};

const Selection = () =>
	<div>
		<FormControl style={ style }>
			<InputLabel id="font-style">Font-Family</InputLabel>
			<Select
				labelId="font-style"
				id="font-style"
				value={ context.state.selection }
				onChange={ (evt) =>
					context.actions.setFontStyle(evt.target.value) }
			>
				{ config.selections.map((option) =>
					<MenuItem key={ option }value={ option }>
						{ option }</MenuItem>) }
			</Select>
		</FormControl>
	</div>;

export default Selection;
