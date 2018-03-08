var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser'); // Not useful anymore
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
const { Strategy, ExtractJwt } = require("passport-jwt");

const config = require("./config");

var User = require('./models/user');
var authRoutes = require('./routes/auth');
var countriesRoutes = require('./routes/countries');
var usersRoutes = require('./routes/users');

require('./configs/database');





var app = express();

app.use(cors());


// view engine setup
// app.set('views', path.join(__dirname, 'views')); // Not useful anymore
// app.set('view engine', 'jade'); // Not useful anymore

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser()); // Not useful anymore
// app.use(express.static(path.join(__dirname, 'public'))); // Not useful anymore

app.use(express.static(path.join(__dirname, '../client/build')));


app.use(passport.initialize());
// Create the strategy for JWT
const strategy = new Strategy(
  {
    // this is a config we pass to the strategy
    // it needs to secret to decrypt the payload of the
    // token.
    secretOrKey: config.jwtSecret,
    // This options tells the strategy to extract the token
    // from the header of the request
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    console.log("DEBUG payload", payload)
    // payload is the object we encrypted at the route /api/token
    // We get the user id, make sure the user exist by looking it up
    User.findById(payload.id).then(user => {
      console.log("Yo", user)
      if (user) {
        // make the user accessible in req.user
        done(null, user);
      } else {
        done(new Error("User not found"));
      }
    });
  }
);
// tell pasport to use it
passport.use(strategy);

app.use('/api', authRoutes);
app.use('/api/countries', countriesRoutes);
app.use('/api/users', usersRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
