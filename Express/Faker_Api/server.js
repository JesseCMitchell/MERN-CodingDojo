/** @format */

const express = require('express');
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// req is short for request
// res is short for response
app.get('/api', (req, res) => {
	res.send('Our express api server is now sending this over to the browser');
});

// ------------- MIDDLEWARE POST DATA Settings ------------
// **** make sure these lines are above any app.get or app.post code blocks
// In order to be able to access POST data, we need to be able to pull it out of the request object. To do this, we first have to add a new setting to our server.js file:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------- User DATA ------------
const createUser = () => ({
	_id: faker.datatype.uuid(),
	FirstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	phoneNumber: faker.phone.phoneNumber(),
	email: faker.internet.email(),
	password: faker.internet.password(),
});

// ------------- Company DATA ------------
const createCompany = () => ({
	_id: faker.datatype.uuid(),
	Name: faker.company.companyName(),
	address: {
		street: faker.address.streetAddress(),
		city: faker.address.cityName(),
		state: faker.address.state(),
		zipcode: faker.address.zipCode(),
		country: faker.address.country(),
	},
});

// ------------- User and Company DATA ------------
const createBoth = () => {
	const company = createCompany();
	const user = createUser();
	return {
		user: user,
		company: company,
	};
};

// Create an api route "/api/users/new" that returns a new user
app.get('/api/user/new', (req, res) => {
	res.json(createUser());
});

// Create an api route "/api/companies/new" that returns a new company
app.get('/api/companies/new', (req, res) => {
	res.json(createCompany());
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get('/api/user/company', (req, res) => {
	res.json(createBoth());
});

// server
const server = app.listen(8000, () =>
	console.log(`Server is locked and loaded on port ${server.address().port}!`),
);
