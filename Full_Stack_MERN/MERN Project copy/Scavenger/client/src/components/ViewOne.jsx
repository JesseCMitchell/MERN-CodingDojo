/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import moment from 'moment';

const OneItem = () => {
	const { _id } = useParams();
	const [details, setDetails] = useState({});
	const [notFound, setNotFound] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/items/${_id}`)
			.then(response => {
				console.log('response: ', response);
				if (response.data.results) {
					setDetails(response.data.results);
				} else {
					setNotFound(true);
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

	return (
		<div>
			{notFound === true ? (
				<img
					src='https://cdn0.vox-cdn.com/thumbor/Rfj3kPpv3Via8UQyOkMsuX8ARlI=/0x1:290x194/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/49790893/tumblr_mqxy6op7Xj1rth2h5o1_400.0.0.gif'
					alt=''
					height='500px'
					width='500'
				/>
			) : (
				<>
					<div className='card mb-3 p-3'>
						<h3>Item Details</h3>
						<p>Title: {details.title}</p>
						<p>Price: {details.price}</p>
						<p>Description: {details.description}</p>
						<p>Item Condition: {details.itemCondition}</p>
						{/* <img
							className='mx-auto'
							src={details.imgUrl}
							alt={details.title}
							height='500px'
							width='350px'
						/> */}
						<img
							className='mx-auto'
							src={`http://localhost:8000/${details.photo}`}
							alt={details.title}
							height='500px'
							width='350px'
						/>
						<p>Date Added: {moment(details.dateAdded).format('MMMM Do, YYYY')}</p>
						<p>In Stock: {details.inStock ? 'Yes' : 'Not available'}</p>
						<button className='btn btn-danger m-3' onClick={deleteItem}>
							Delete {details.title}
						</button>
						<Link to={`/items/edit/${details._id}`} className='btn btn-warning m-3'>
							Edit {details.title}
						</Link>
						<Link to={`/`} className='btn btn-primary m-3'>
							Back
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default OneItem;
