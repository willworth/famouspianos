const express = require("express");
const Piano = require("./pianoModel");

module.exports = function(app) {
  const router = express.Router();

  router.route("/pianos").get(function(req, res) {
    Piano.find({}, function(err, pianos) {
      if (err) {
        console.log(`${err}`);
        res.status(404).json({ msg: "Not found" });
      } else {
        res.json(pianos);
      }
    });
  });

  router.route("/piano").post(function(req, res) {
    const { name, year, make, owner, factoid } = req.body;
    console.log(JSON.stringify({ name, year, make, owner, factoid }));
    console.log(req.body);
    const piano = new Piano({ name, year, make, owner, factoid });
    piano.save((err, newPiano) => {
      if (err) {
        console.log(`${err}`);
        res.status(404).json({ msg: "Error creating piano" });
      } else {
        res.json(newPiano);
      }
    });
  });
  app.use("/api", router);
};
