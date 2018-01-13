const bodyParser  = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const registerRoutes = require('./controllers/routes');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.set('host', '0.0.0.0');
app.set('port', process.env.SERVER_PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

registerRoutes(app);

app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});