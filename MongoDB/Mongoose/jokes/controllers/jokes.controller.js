/** @format */

const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
	Joke.find()
		.then(allDaJokes => res.json({ jokes: allDaJokes }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};
