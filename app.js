const express = require('express');
const app = express();
const db = require('./db');
module.exports = app;

const UserController = require('./user/UserController');
app.use('/users', UserController);
module.exports = app;