/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Paper from '@mui/material/Paper';
const styles = {
	paper: {
		width: 'auto',
		padding: '1rem',
	},
	input: {
		marginBottom: '1rem',
	},
};

const AllItems = props => {
	let [items, setItems] = useState([]);
	let [itemDeleted, setItemDeleted] = useState(false);

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/items')
			.then(response => {
				console.log('response: ', response);
				setItems(response.data.results);
			})
			.catch(err => console.log(err));
	}, [itemDeleted, props.formSubmitted]);

	const deleteItem = _id => {
		axios
			.delete(`http://localhost:8000/api/items/${_id}`)
			.then(response => {
				setItemDeleted(!itemDeleted);
			})
			.catch(err => console.log(err));
	};

	return (
		<div>
			<div className='d-grid'>
				<div className='d-grid gap-2 d-md-flex justify-content-between'>
					<Link to={`/items/create`} className='btn btn-success m-3 shadow'>
						Login/Register
					</Link>
					<Link to={`/items/create`} className='btn btn-success m-3 shadow'>
						My Collection
					</Link>
				</div>
			</div>
			<Paper elevation={3} style={styles.paper}>
				<div>
					<div id='wrapper'>
						{/* <span
						id='controlL'
						class='left-controls'
						role='button'
						aria-label='See Previous Modules'>
						<b class='fa fa-chevron-left fa-chevron-left-extra' aria-hidden='true'></b>
					</span> */}

						<div class='title text-center h1'>Recent Listings</div>

						<div className='module-section clearfix'>
							{/* <button className='btn arrow-guides fa-chevron-left'></button> */}
							<ul id='content'>
								{items.map((item, i) => {
									return (
										<Link to={`/items/${item._id}`}>
											<li key={i} className='card effect1'>
												<div
													class='inside-top'
													style={{
														backgroundImage: `url(${`http://localhost:8000/${item.photo}`})`,
														backgroundSize: '10em',
														backgroundPosition: 'center',
														backgroundRepeat: 'no-repeat',
														width: '250px',
													}}></div>
												{/* <img src={item.profilePicUrl} height = "100px" width= "100px"/> */}
												<div className='card-body text-center fixed-bottom'>
													<h5 className='card-title'>{item.title}</h5>
													<p className='card-text'>
														Price: ${item.price}
													</p>
												</div>
											</li>
										</Link>
									);
								})}
							</ul>
						</div>

						{/* <span
						id='controlR'
						class='right-controls'
						role='button'
						aria-label='See Previous Modules'>
						<b
							class='fa fa-chevron-right fa-chevron-right-extra'
							aria-hidden='true'></b>
					</span>
					<button class='btn arrow-guides-right fa-chevron-right'></button> */}
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default AllItems;
