/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Form from './Form';
import { useNavigate, Link } from 'react-router-dom';

const ItemForm = props => {
	let [formInfo, setFormInfo] = useState({});
	let [formErrors, setFormErrors] = useState({});

	const changeHandler = e => {
		if (e.target.type === 'dropdown') {
			setFormInfo({
				...formInfo,
				[e.target.name]: e.target.value,
			});
		}
		if (e.target.type === 'checkbox') {
			setFormInfo({
				...formInfo,
				[e.target.name]: e.target.checked,
			});
		} else {
			setFormInfo({
				...formInfo,
				[e.target.name]: e.target.value,
			});
		}
	};
	const navigate = useNavigate();
	// if there are any errors, then save the errors to a state variable
	// when submitting an incomplete form -> response looks like this: response.data.errors
	// when submitting a complete form -> response looks like this: response.data.results
	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/api/items', formInfo)
			.then(response => {
				console.log('Response from submission form');
				if (response.data.errors) {
					setFormErrors(response.data.errors);
				} else {
					setFormErrors({});
					props.setFormSubmitted(props.formSubmitted);
					navigate('/');
				}
			})
			.catch(err => console.log(err));
	};

	// returning the create form from our Form.js
	return (
		<div>
			<h3>Add a new Author:</h3>
			<Form
				changeHandler={changeHandler}
				handleSubmit={handleSubmit}
				formInfo={formInfo}
				formErrors={formErrors}
				buttonValue={'Add Author'}></Form>
			<Link to={`/`} className='btn btn-outline-secondary shadow m-3'>
				Cancel
			</Link>
		</div>
	);
};

export default ItemForm;
