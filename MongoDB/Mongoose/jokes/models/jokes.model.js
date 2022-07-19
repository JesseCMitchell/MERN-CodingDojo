/** @format */

const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, 'Setup required'],
			minlength: [10, 'Setup must be at least 10 characters long'],
		},
		punchline: {
			type: String,
			required: [true, 'Punchline required'],
			minlength: [10, 'Punchline must be at least 10 characters long'],
		},
	},
	{ timestamps: true },
);

const Joke = mongoose.model('joke', JokesSchema);

module.exports = Joke;
