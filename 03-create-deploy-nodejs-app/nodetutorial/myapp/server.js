const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send(' Hello World!');
  console.log('Hello World sent to Browser at: ' + new Date() ); //new line

})

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('myapp is using Node.js version: ' + process.version); //new line
  console.log(`myapp listening on port ${port}`);
})