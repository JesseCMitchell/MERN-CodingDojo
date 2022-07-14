/** @format */

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Routing Test</h1>
			<Routes>
				<Route path='/home' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
