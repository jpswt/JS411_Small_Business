import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import NavBar from './containers/NavBar';
// import './App.css';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Router />
		</BrowserRouter>
	);
}

export default App;
