/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import moment from 'moment';
import Form from './Form';
import ItemForm from './CreateItem';

const EditForm = props => {
	const { _id } = useParams();
	const [formInfo, setFormInfo] = useState({
		title: '',
		price: '',
		description: '',
		imgUrl: '',
		photo: '',
		dateAdded: '',
		forSale: '',
		itemCondition: '',
	});
	let [formErrors, setFormErrors] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/items/${_id}`)
			.then(response => {
				console.log('response: ', response);
				if (response.data.results) {
					setFormInfo(response.data.results);
				}
			})
			.catch(err => console.log(err));
	}, []);

	const deleteItem = () => {
		axios
			.delete(`http://localhost:8000/api/items/${_id}`)
			.then(response => {
				console.log('response', response);
				navigate('/');
			})
			.catch(err => console.log(err));
	};

	//changehandler to update formInfo object with info from the form as it is being changed
	const changeHandler = e => {
		if (e.target.type === 'dropdown') {
			setFormInfo({
				...formInfo,
				[e.target.name]: e.target.value,
			});
		}
		// console.log('updating the form');
		if (e.target.type === 'checkbox') {
			setFormInfo({
				...formInfo,
				[e.target.name]: !formInfo.checkbox,
			});
		} else {
			setFormInfo({
				...formInfo,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', formInfo.title);
		formData.append('price', formInfo.price);
		formData.append('description', formInfo.description);
		formData.append('imgUrl', formInfo.imgUrl);
		formData.append('photo', formInfo.photo);
		formData.append('dateAdded', formInfo.dateAdded);
		formData.append('forSale', formInfo.forSale);
		formData.append('itemCondition', formInfo.itemCondition);
		axios
			.put(`http://localhost:8000/api/items/${_id}`, formData)
			.then(response => {
				console.log('Response from update request', response);
				navigate('/');
				if (response.data.errors) {
					setFormErrors(response.data.errors);
				} else {
					setFormErrors({});
					props.setFormSubmitted(!props.formSubmitted);
				}
			})
			.catch(err => console.log(err));
	};

	// returning the edit form from our Form.js
	return (
		<div>
			<h3>Edit {formInfo.title}</h3>
			<Form
				changeHandler={changeHandler}
				handleSubmit={handleSubmit}
				formInfo={formInfo}
				formErrors={formErrors}
				FormData={FormData}
				buttonValue={'Update Item'}></Form>
			<Link to={`/`} className='btn btn-outline-secondary shadow m-3'>
				Cancel
			</Link>
			<button className='btn btn-danger m-3' onClick={deleteItem}>
				Delete {formInfo.title}
			</button>
		</div>
	);
};

export default EditForm;
