/** @format */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from './Error';

const Planets = () => {
	const [planets, setPlanets] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/planets/${id}`)
			.then(res => {
				console.log(res.data);
				setPlanets(res.data);
			})
			.catch(error => {
				console.error(error);
				setPlanets({ error: "These aren't the droids you're looking for" });
			});
	}, [id]);

	if (!planets) {
		return <h1>Loading...</h1>;
	} else if (planets.error) {
		return (
			<div>
				<Error />
			</div>
		);
	} else {
		return (
			<div className='card'>
				<h1 className='card-header'>{planets.name}</h1>
				<div className='card-body'>
					<h3 className='card-text'>Climate: {planets.climate}</h3>
					<h3 className='card-text'>Terrain: {planets.terrain}</h3>
					<h3 className='card-text'>Surface Water: {planets.surface_water}</h3>
					<h3 className='card-text'>Population: {planets.population}</h3>
				</div>
			</div>
		);
	}
};

export default Planets;
