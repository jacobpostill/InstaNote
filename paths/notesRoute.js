const { save, read } = require('../database/script');
const uuid = require('../database/uuid');
const express = require('express');


const expressRouter = require('express').Router();
expressRouter.get('/', (req, res) => {
    read("../db", "db.json").then ((data) => {res.json(data);});
  });

expressRouter.post('/', (req, res) => {
    read("../db", "db.json").then ((data) => {
      dataLoad = JSON.parse(data);
      const {title, text} = req.body;
      dataLoad.push ({id: uuid(), title: title, text:text});
      save(JSON.stringify (dataLoad), "../db", "db.json").then ((data) => {
        if (data.indexOf ("success") !== false)
        {          
          const response = {
            status: 'success',
            body: data,
        };
          res.status(201).json(response);
    } else {
        res.json('Posting feedback Error');
    }
    
        })})});

expressRouter.delete('/:noteId', (req, res) => {
  const deleteId = req.params.noteId;
  if (deleteId != "" && deleteId != undefined)
  {
    read("../db", "db.json").then ((data) => {
      const dataLoad = JSON.parse(data);
      const dataFilter = dataLoad.filter(entry => entry.id != deleteId); 
      save (JSON.stringify (dataFilter), "../db", "db.json").then ((data) => {
        if (data.indexOf ("success") !== false)
        { 
          const response = {
            status: 'success',
            body: data,
          };

          res.status(201).json(response);
        } else {
          res.status(500).json('Posting feedback Error');
        }})});}
});

module.exports = expressRouter;
