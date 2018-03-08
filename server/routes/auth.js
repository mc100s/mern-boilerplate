const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jwt-simple');
const passport = require('passport');
const config = require('../config');


router.post('/signup', (req, res, next) => {
  const { username, name, password } = req.body;
  const user = new User({
    username,
    name
  });

  User.register(user, password, err => {
    if (err) return next(err);
    res.json({ success: true });
  });
});

router.post('/login', (req, res, next) => {
  const authenticate = User.authenticate();
  const { username, password } = req.body;
  // check if we have a username and password
  if (username && password) {
    // test if the credentials are valid
    authenticate(username, password, (err, user, failed) => {
      if (err) {
        // an unexpected error from the database
        return next(err);
      }
      if (failed) {
        // failed logging (bad password, too many attempts, etc)
        return res.status(401).json({
          error: failed.message,
        });
      }
      if (user) {
        // success!! Save the user id
        // NEVER save the password here
        // the id is usually enough because we can get back
        // the actual user by fetching the database later
        const payload = {
          id: user.id,
        };
        // generate a token and send it
        // this token will contain the user.id encrypted
        // only the server is able to decrypt it
        // for the client, this is just a token, he knows that
        // he has to send it
        const token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token,
          name: user.name,
          // picture: user.picture,
        });
      }
    });
  } else {
    // unauthorized error
    res.sendStatus(401);
  }
});

router.get('/secret', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  res.json(42);
});

module.exports = router;