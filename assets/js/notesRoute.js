const path = require('path');
const fs = require ('fs');
const express = require ('express');


module.exports = function(app) {
    app.get("*", function(required,resolve) {
        resolve.sendFile(path.join(__dirname, "../html/index.html"));
    });
    app.get("/notes", function(required,resolve) {
        resolve.sendFile(path.join(__dirname, "../html/notes.html"));
    });
};