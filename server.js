const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const indexPath = require('./paths/api.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));
app.use('/api', indexPath);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>{
    console.log(`Example app listening at http://localhost:${PORT}`);
  });