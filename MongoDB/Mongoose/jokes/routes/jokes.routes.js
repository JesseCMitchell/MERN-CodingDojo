/** @format */

const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
	app.get('/api/jokes/', JokeController.findAllJokes);
	app.get('/api/jokes/:_id', JokeController.findOneJoke);
	app.get('/api/jokes/random', JokeController.randomJoke);
	app.get('/api/jokes/new', JokeController.createNewJoke);
	app.get('/api/jokes/update/:_id', JokeController.updateJoke);
	app.get('/api/jokes/delete/:_id', JokeController.deleteJoke);
};
