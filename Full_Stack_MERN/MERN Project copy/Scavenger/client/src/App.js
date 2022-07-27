/** @format */

import './App.css';
import { useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import AllItems from './components/ViewAll';
import EditForm from './components/EditForm';
import OneItem from './components/ViewOne';
import ItemForm from './components/CreateItem';

function App() {
	let [formSubmitted, setFormSubmitted] = useState(false);

	return (
		<div className='App container'>
			<h1>Scavenger</h1>
			<Routes>
				<Route
					exact
					path='/' //this is where to start when moving the itemform to a new page
					element={
						<>
							<AllItems formSubmitted={formSubmitted}></AllItems>
						</>
					}></Route>
				<Route
					exact
					path='/items/create'
					element={
						<ItemForm
							formSubmitted={formSubmitted}
							setFormSubmitted={setFormSubmitted}></ItemForm>
					}></Route>
				<Route exact path='/items/:_id' element={<OneItem />}></Route>
				<Route exact path='/items/edit/:_id' element={<EditForm />}></Route>
			</Routes>
		</div>
	);
}

export default App;
