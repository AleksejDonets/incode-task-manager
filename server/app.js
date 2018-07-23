const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/taskManager',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/*", express.static(path.join(__dirname, "../client/build/static/")));



server.listen(3005, () => {
  console.log(`Server is listening at port: 3005`);
});