/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
	return (
		<div>
			<h1 style={{ color: 'red' }}>Welcome!</h1>
			<Link to={'/about'}>Go to About</Link>
		</div>
	);
};

export default Home;
