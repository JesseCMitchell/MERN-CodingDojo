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
		<Paper elevation={3} style={styles.paper}>
			<div>
				<Link to={`/items/create`} className='btn btn-outline-primary shadow m-3'>
					Add an Author
				</Link>
				<h3>We have quotes by:</h3>
				<table className='table'>
					<thead className='table-light'>
						<tr>
							<th className='col'>Author</th>
							<th className='col'>Actions</th>
						</tr>
					</thead>
				</table>
				{items.map(item => {
					return (
						<div key={items._id} className='mb-3 p-3'>
							<table className='table'>
								<tbody>
									<tr>
										<th className='row'>
											<h3>
												<Link to={`/items/${item._id}`}>{item.title}</Link>
											</h3>
											<p>
												Date Added:{' '}
												{moment(item.dateAdded).format('MMMM Do, YYYY')}
											</p>
										</th>
										<td>
											<Link
												to={`/items/edit/${item._id}`}
												className='btn btn-warning m-3'>
												Edit {item.title}
											</Link>
											<button
												className='btn btn-danger m-3'
												onClick={() => deleteItem(item._id)}>
												Delete {item.title}
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					);
				})}
			</div>
		</Paper>
	);
};

export default AllItems;
