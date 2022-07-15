/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Error from './Error';

const People = () => {
	const [person, setPerson] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/people/${id}`)
			.then(res => {
				console.log(res.data);
				setPerson(res.data);
			})
			.catch(error => {
				console.error(error);
				setPerson({ error: "These aren't the droids you're looking for" });
			});
	}, [id]);

	if (!person) {
		return <h1>Loading...</h1>;
	} else if (person.error) {
		return (
			<div>
				<Error />
			</div>
		);
	} else {
		return (
			<div className='card' style={{ width: '18rem;' }}>
				<h1 className='card-header'>{person.name}</h1>
				<div className='card-body'>
					<h3 className='card-text'>Height: {person.height}</h3>
					<h3 className='card-text'>Mass: {person.mass}</h3>
					<h3 className='card-text'>Hair Color: {person.hair_color}</h3>
					<h3 className='card-text'>Skin Color: {person.skin_color}</h3>
				</div>
			</div>
		);
	}
};

export default People;
