/*
Developers:
* Gal Kalev 318657632
* Hadar Asher 207767005
 */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const addcaloriesRouter = require('./routes/addcalories');
const reportRouter = require('./routes/report');

const app = express();

// Connect to mongodb
let uri = process.env.DATABASE_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected To DB Successfully....');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:' + err);
  });

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/addcalories', addcaloriesRouter);
app.use('/report', reportRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
