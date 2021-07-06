import React from 'react';
import Switch from '@material-ui/core/Switch';
import context from '../core/context';
import Typography from '@material-ui/core/Typography';

const ThemeSwitch = () =>
	<span>
		<Typography id="continuous-slider">
			Theme
			<Switch
				checked={ context.state.darkTheme }
				onChange={ (evt) =>
					context.actions.setTheme(evt.target.checked) }
				name="ThemeSwitch"
				inputProps={ { 'aria-label': 'secondary checkbox' } }
			/>
		</Typography>

	</span>;

export default ThemeSwitch;
