/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const Home = () => {
	const [type, setType] = useState('people');
	const [id, setId] = useState('');
	let navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		navigate(`/${type}/${id}`);
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<label className='ms-3 fs-3 fw-bold' htmlFor='type'>
					Search For:{' '}
				</label>
				<select
					className='ms-3 shadow'
					onChange={e => setType(e.target.value)}
					value={type}>
					<option value='people'>People</option>
					<option value='planets'>Planets</option>
				</select>
				<label className='ms-3 fs-3 fw-bold'> ID: </label>
				<input
					className='ms-3 shadow'
					type='text'
					name='id'
					onChange={e => setId(e.target.value)}
					value={id}
				/>
				<Button className='ms-3 shadow'>Search</Button>
			</Form>
		</div>
	);
};

export default Home;
