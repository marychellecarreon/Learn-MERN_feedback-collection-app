const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

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
