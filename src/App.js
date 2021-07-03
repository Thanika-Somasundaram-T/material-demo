import './App.scss';
import { React } from 'react';
import Buttons from './components/buttons';

const App = () =>
	<div className="App">
		{ Buttons() }
	</div>;

export default App;
