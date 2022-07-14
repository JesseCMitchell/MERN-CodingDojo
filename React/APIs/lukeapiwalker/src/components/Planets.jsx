import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Planets = () => {
    const [planets, setPlanets] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res)
                setPlanets(res.data)
            })
            .catch(err =>{
                console.error(err);
                setPlanets({ error: "These aren't the droids you're looking for" })
            })
    }, [id]);

    return (
        planets ? (
            <div>
                <h1>{planets.name}</h1>
                <div>
                    <h3>Climate: {planets.climate}</h3>
                    <h3>Terrain: {planets.terrain}</h3>
                    <h3>Surface Water: {planets.surface_water}</h3>
                    <h3>Population: {planets.population}</h3>
                </div>
            </div>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default Planets;