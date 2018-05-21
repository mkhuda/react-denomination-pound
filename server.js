const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('./dist'));
app.use('/static', express.static('static'));
app.use('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
