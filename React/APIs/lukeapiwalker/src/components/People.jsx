/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const People = () => {
	const [person, setPerson] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/people/${id}`)
			.then(res => {
				console.log(res);
				setPerson(res.data);
			})
			.catch(error => {
				console.error(error);
				setPerson({ error: "These aren't the droids you're looking for" });
			});
	}, [id]);

	return person ? (
		<div>
			<h1>{person.name}</h1>
			<div>
				<h3>Height: {person.height}</h3>
				<h3>Mass: {person.mass}</h3>
				<h3>Hair Color: {person.hair_color}</h3>
				<h3>Skin Color: {person.skin_color}</h3>
			</div>
		</div>
	) : (
		<h1>Loading...</h1>
	);
};

export default People;
