/** @format */

import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Text from './components/Text';
import './App.css';

const Location = props => {
	const { city } = useParams(); //matches our :city in our Routes
	return <h1>Welcome to {city} !</h1>;
};

function App() {
	return (
		<div className='App'>
			<h1>Routing Test</h1>
			<p>
				<Link to='/location/seattle'>Seattle</Link>|
				<Link to='/location/chicago'>Chicago</Link>|
				<Link to='/location/burbank'>Burbank</Link>
			</p>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/:text' element={<Text />} />
				<Route path='/about' element={<About />} />
				<Route path='/location/:city' element={<Location />} />
			</Routes>
		</div>
	);
}

export default App;
