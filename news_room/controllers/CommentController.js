/*const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.Comment
            .find(req.query)
            .sort({ date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(422).json(err));
    },




}*/