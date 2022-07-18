/** @format */
/*
This is actually what creates and starts our server.It's the only file we run
from the terminal but it results in all other files being executed from here.
*/
// Import packages here from node_modules:
const express = require('express');

// Environment variables,these may change from dev to prod environments.
const port = 8000;
const db_name = 'travel-planner';

const connectToDbCallback = require('./config/mongoose.config');
connectToDbCallback(db_name);
