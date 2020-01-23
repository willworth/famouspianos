const mongoose = require("mongoose");
var Schema = mongoose.Schema;

let pianoSchema = new Schema({
  name: String,
  year: Number,
  make: String,
  owner: String,
  factoid: String
});

const Piano = mongoose.model("Piano", pianoSchema);

module.exports = Piano;
