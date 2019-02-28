//PASSWORD: JNQMltrOs9WG3Cov
//CONNECTION: mongodb+srv://endosi:<PASSWORD>@cluster0-cmmqj.mongodb.net/test?retryWrites=true


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const notesRoutes = require('./routes/notes');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://endosi:JNQMltrOs9WG3Cov@cluster0-cmmqj.mongodb.net/test?retryWrites=true')
	.then(() => {
		console.log('Successfully connected to Mongo');
	})
	.catch((error) => {
		console.log('Unable to connect');
		console.error(error);
	});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/notes', notesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;