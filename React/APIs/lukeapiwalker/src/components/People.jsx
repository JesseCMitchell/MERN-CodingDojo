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
			<div>
				<h1>{person.name}</h1>
				<div>
					<h3>Height: {person.height}</h3>
					<h3>Mass: {person.mass}</h3>
					<h3>Hair Color: {person.hair_color}</h3>
					<h3>Skin Color: {person.skin_color}</h3>
				</div>
			</div>
		);
	}
};

export default People;
