const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const configDb = require('./config/info');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

mongoose.Promise = global.Promise;
mongoose.connect(configDb.mongoUrl, { useNewUrlParser: true }  )

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
require('./config/passport');

require('./models/User');
require('./routes/users')(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});