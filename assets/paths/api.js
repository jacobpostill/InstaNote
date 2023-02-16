const express = require('express');
const expressRouter = require('./notesRoute');
const app = express();

app.use('/notesRoute', expressRouter);

module.exports = app;