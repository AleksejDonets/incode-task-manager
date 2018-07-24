const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const configDb = require('./config/db');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


mongoose.Promise = global.Promise;
mongoose.connect(configDb.url, { useNewUrlParser: true }  )


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/cleint/build/index.html'));
});






require('./config/passport');
require('./routes/userRoute')(app)

app.listen(3005, () => console.log('Example app listening on port 3005!'))