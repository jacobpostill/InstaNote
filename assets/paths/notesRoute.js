const expressRouter = require('express').Router();
const { save, read } = require('../js/script');
const uuid = require('../js/uuid');
const express = require('express');

routeNote.get('/', (req, res) => {
    read("../db", "db.json").then ((data) => {res.json(data);});
  });

expressRouter.post('/', (req, res) => {
    read("../db", "db.json").then ((data) => {
      dataLoad = JSON.parse(data);
      const {title, text} = req.body;
      dataLoad.push ({id: uuid(), title: title, text:text});
      save(JSON.stringify (loadedData), "../db", "db.json").then ((data) => {
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

module.exports = expressRouter;
