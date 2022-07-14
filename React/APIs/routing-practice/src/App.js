/** @format */

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Routing Test</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
