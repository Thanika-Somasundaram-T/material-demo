import React from 'react';
import Switch from '@material-ui/core/Switch';
import context from '../core/context';

const ThemeSwitch = () =>
	<Switch
		checked={ context.state.darkTheme }
		onChange={ (evt) => context.actions.setTheme(evt.target.checked) }
		name="ThemeSwitch"
		inputProps={ { 'aria-label': 'secondary checkbox' } }
	/>;

export default ThemeSwitch;
