import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [type, setType] = useState('people');
    const [id, setId] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='type'>Search For: </label>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label> ID: </label>
                <input type='text' min={1} name='id' onChange={e => setId(e.target.value)} value={id} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Home