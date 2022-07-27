/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Form from './Form';
import { useNavigate, Link } from 'react-router-dom';

const ItemForm = props => {
	let [formInfo, setFormInfo] = useState({
		title: '',
		price: '',
		description: '',
		imgUrl: '',
		dateAdded: '',
		forSale: '',
		photo: '',
		itemCondition: '',
	});

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
		} else if (e.target.type === 'file') {
			setFormInfo({
				...formInfo,
				[e.target.name]: e.target.files[0],
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

		const formData = new FormData();
		formData.append('title', formInfo.title);
		formData.append('price', formInfo.price);
		formData.append('description', formInfo.description);
		formData.append('imgUrl', formInfo.imgUrl);
		formData.append('dateAdded', formInfo.dateAdded);
		formData.append('itemCondition', formInfo.itemCondition);
		formData.append('forSale', formInfo.forSale);
		formData.append('photo', formInfo.photo);

		// axios.post('http://localhost:8000/api/items', formData)
		axios({
			method: 'post',
			url: 'http://localhost:8000/api/items',
			data: formData,
		})
			.then(response => {
				console.log('Error response from submission form', response);
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
			<h3>Add an Item</h3>
			<form onSubmit={handleSubmit} encType='multipart/form-data'>
				<div className='form-group'>
					<label htmlFor=''>Item Title:</label>
					<input
						onChange={changeHandler}
						type='text'
						name='title'
						id=''
						className='form-control'
						value={formInfo.title}
					/>
					<p className='text-danger'>{formErrors.title?.message}</p>
				</div>
				<div className='form-group'>
					<label htmlFor=''>Price:</label>
					<input
						onChange={changeHandler}
						type='number'
						name='price'
						id=''
						className='form-control'
						value={formInfo.price}
					/>
					<p className='text-danger'>{formErrors.price?.message}</p>
				</div>
				<div className='form-group'>
					<label htmlFor=''>Description:</label>
					<input
						onChange={changeHandler}
						type='text'
						name='description'
						id=''
						className='form-control'
						value={formInfo.description}
					/>
					<p className='text-danger'>{formErrors.description?.message}</p>
				</div>
				<div className='form-group'>
					<label htmlFor=''>Date added:</label>
					<input
						onChange={changeHandler}
						type='date'
						name='dateAdded'
						id=''
						className='form-control'
						value={formInfo.dateAdded}
					/>
					<p className='text-danger'>{formErrors.dateAdded?.message}</p>
				</div>
				<div className='form-group'>
					<label htmlFor=''>Image Url:</label>
					<input
						onChange={changeHandler}
						type='text'
						name='imgUrl'
						id=''
						className='form-control'
						value={formInfo.imgUrl}
					/>
				</div>
				<select
					label='Item Condition'
					className='ms-3 shadow'
					onChange={changeHandler}
					type='dropdown'
					name='itemCondition'
					value={formInfo.itemCondition}>
					<option value=''></option>
					<option value='Mint'>Mint</option>
					<option value='Like New'>Like New</option>
					<option value='Damaged Package'>Damaged Package</option>
					<option value='Loose'>Loose</option>
					<option value='Incomplete/Damaged'>Incomplete/Damaged</option>
				</select>
				<div className='form-group'>
					<label htmlFor=''>For Sale:</label>
					<input
						onChange={changeHandler}
						type='checkbox'
						name='forSale'
						id=''
						className='form-checkbox'
						value={formInfo.forSale}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor=''>Upload Photo</label>
					<input
						onChange={changeHandler}
						type='file'
						accept='.png, .jpg, .jpeg'
						name='photo'
					/>
				</div>
				<input type='submit' value='Submit' className='btn btn-success mt-3' />
			</form>
			<Link to={`/`} className='btn btn-outline-primary shadow m-3'>
				Dashboard
			</Link>
		</div>
	);
};

export default ItemForm;
