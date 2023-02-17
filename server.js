const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const indexPath = require('./assets/paths/api.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', indexPath);
app.use(express.static("./public/"));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'assets/html/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'assets/html/index.html'))
);

app.listen(PORT, () =>{
    console.log(`Example app listening at http://localhost:${PORT}`);
  });