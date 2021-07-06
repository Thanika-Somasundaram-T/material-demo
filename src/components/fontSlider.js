/* eslint-disable max-lines-per-function */
import React from 'react';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import context from '../core/context';

const style = {
	left: 100,
	width: 200,
	position: 'relative',
};

const FontSlider = () =>
	<div style={ style }>
		<Typography id="continuous-slider">
			Font
		</Typography>
		<Slider
			value={ context.state.fontValue }
			onChange={
				(dummy, newValue) => context.actions.setValue(newValue)
			}
			aria-labelledby="input-slider"
		/>
		<Input
			value={ context.state.fontValue }
			margin="dense"
			onChange={
				(evt) => context.actions.setValue(evt.target.value)
			}
			inputProps={ {
				'step': 10,
				'min': 0,
				'max': 100,
				'type': 'number',
				'aria-labelledby': 'input-slider',
			} }
		/>
	</div>;

export default FontSlider;
