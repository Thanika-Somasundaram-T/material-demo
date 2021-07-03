import { React } from 'react';
import { Button } from '@material-ui/core';

const Buttons = () =>
	<div>
		<Button variant="contained">Default</Button>
		<Button variant="contained" color="primary">
			Primary
		</Button>
		<Button variant="contained" color="secondary">
			Secondary
		</Button>
		<Button variant="contained" disabled="disabled">
			Disabled
		</Button>
		<Button variant="contained" color="primary" href="#contained-buttons">
			Link
		</Button>
	</div>;

export default Buttons;
