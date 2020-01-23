const mongoose = require("mongoose");
const chalk = require("chalk");
//doordb will be created on the fly if it doesn't exist
mongoose.connect("mongodb://localhost:27017/pianoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log(chalk.black.bgYellow.bold("DB connected"));
});

module.exports = db;
