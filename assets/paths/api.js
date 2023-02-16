const db_data = require(".../db/db.json");
module.exports = function(app) {
    app.get("/api/notes/", function(req,res) {
        res.json(db_data);
    });
    app.post("/api/notes/", function(req,res) {
        db_data.push(req.body);
        res.json(true);
    })
};