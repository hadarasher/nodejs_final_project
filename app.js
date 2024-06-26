var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const addcaloriesRouter = require('./routes/addcalories');

var app = express();

// connect to mongodb
let uri = "mongodb+srv://hadarasher99:11aa22bb33cc@clusterasyncprog.dpxx2do.mongodb.net/CaloriesManager?retryWrites=true&w=majority&appName=ClusterAsyncProg";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
      console.log("Connected To DB Sucessfully....");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB:"+err);
    })

// view engine setup
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
app.use('/addcalories',addcaloriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
