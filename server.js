// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var passport         = require('passport');
var LocalStrategy    = require('passport-local').Strategy;
var morgan           = require('morgan');
var passport         = require('passport');
var flash            = require('connect-flash');
var mongoose         = require('mongoose');

var cookieParser     = require('cookie-parser');
var session          = require('express-session');

var   db             = require('./config/db');
const app            = express();


var routes = require('./app/routes/');


const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


 
const router = express.Router() // 1

// 在每一個請求被處理之前都會執行的 middleware
router.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});


mongoose.connect(db.url);

mongoose.Promise = global.Promise;

db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(err, database) {

      console.log("database connected!");

      // app.use('/', router);
	  routes(app);

      app.listen(port, () => {
        console.log('We are live on ' + port);
      });  
});








