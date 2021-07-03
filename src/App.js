import './App.scss';
import { React } from 'react';
import Button from '@material-ui/core/Button';
import context from './core/context';
import ThemeSwitch from './components/themeSwitch';

const App = () =>
	<div className={ `App ${ context.state.darkTheme ? 'dark' : 'light' }` }>
		<Button color="primary">Hello World</Button>
		{ ThemeSwitch() }
	</div>;

export default App;
