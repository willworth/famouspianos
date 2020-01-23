const express = require("express");
const chalk = require("chalk");
const app = express();

const bodyParser = require("body-parser");
const port = 7777;

var db = require("./db");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("famous piano app is working");
});

app.listen(port, () => {
  console.log(chalk.bgGreen.yellowBright(`app listening on port ${port}`));
});
