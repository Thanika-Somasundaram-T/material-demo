import './App.scss';
import { React } from 'react';
import Button from '@material-ui/core/Button';
import context from './core/context';
import FontSlider from './components/fontSlider';
import ThemeSwitch from './components/themeSwitch';
import Buttons from './components/buttons';

const style = () => ({
	fontSize: `${ context.state.fontValue }px`,
});

const App = () =>
	<div
		style={ style() }
		className={ `App ${ context.state.darkTheme ? 'dark' : 'light' }` }
	>
		CHECK - FONT
		<Button color="primary">Hello World</Button>
		{ Buttons() }
		{ ThemeSwitch() }
		{ FontSlider() }
	</div>;

export default App;
