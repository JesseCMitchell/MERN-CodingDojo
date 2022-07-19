/** @format */

const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
	setup: String,
	punchline: String,
});

const Joke = mongoose.model('joke', JokesSchema);

module.exports = Joke;
