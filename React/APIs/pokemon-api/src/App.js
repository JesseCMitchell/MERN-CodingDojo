import React, { useState, useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {  Button } from 'react-bootstrap'

function App() {

  const [pokemon, setPokemon] = useState({});
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    if (sendRequest) {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => response.json())
        .then(response => {
          setPokemon(response.results)

        })
        .catch()
      setSendRequest(false);
    }
  }, [sendRequest]);

  const onClick = (e) => {
    setSendRequest(true)
  }

  return (
    <div className="App">
      <div className="">
        <Button className="btn btn-success mt-3 mb-3 shadow" onClick={onClick}> Fetch Pokemon</Button>
        <h2 className="mb-2">List of Pokemon: </h2>
        <div>
          <ul className="list-group">
            {pokemon.length > 0 && pokemon.map((pokemon, index) =>
              <li className="list-group-item" key={index}>{pokemon.name}</li>
            )}
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default App;
