const fs = require ('fs');
const path = require('path');

const save = (data, directory, file) =>
    new Promise((resolve, reject) => {
    let CurrDirectory = path.join(__dirname, directory);

    fs.mkdir(CurrDirectory, { recursive: true }, (err) => {
        if (err)
        {
            reject('Failed to save to database\n\n' + err);
        }
        else
        {
            let pathFile = CurrDirectory + "/" + file;
            fs.writeFile(pathFile, data, (err) => {
                err ? reject('Unable to save file to database\n\n' + err) : resolve('File has been successully saved\n\n' + pathFile);
        });}});});


const read = (directory, file) =>
  new Promise((resolve, reject) => {
    let CurrDirectory = path.join(__dirname, directory);
    let pathFile = CurrDirectory + "/" + file;

    fs.readFile(pathFile, 'utf8', (err, data) => {
        if (err) {
            reject(new Error(err));
        }
        else
        {
            resolve(data);
        }});});

module.exports = {save, read}; 
