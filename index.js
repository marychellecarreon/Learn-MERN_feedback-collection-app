const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);


const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,   //how long cookie will expired
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//  res.send({ bye:'buddy' });
// });

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// app - express app to register this route handler with
// get - get info ; watch incoming request
// post - send info
// put - update all the properties of something
// delete - delete something
// patch - update one or two properties of something

// req = object representing the incoming request
// res = represent the outgoing response
// res.send =
