const express = require('express');
const expressRouter = require('./notesRoute');
const app = express();

app.use('/notes', expressRouter);

module.exports = app;