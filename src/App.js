import './App.scss';
import { React } from 'react';
import Button from '@material-ui/core/Button';
import context from './core/context';
import FontSlider from './components/fontSlider';
import ThemeSwitch from './components/themeSwitch';
import Buttons from './components/buttons';
import Selection from './components/selection';

const style = () => ({
	fontSize: `${ context.state.fontValue }px`,
	fontFamily: `${ context.state.selection }`,
});

const App = () =>
	<div
		style={ style() }
		className={ `App ${ context.state.darkTheme ? 'dark' : 'light' }` }
	>
		CHECK - FONT
		<div><Button color="primary">Hello World</Button> </div>
		{ Buttons() }
		{ ThemeSwitch() }
		{ FontSlider() }
		{ Selection() }
	</div>;

export default App;
