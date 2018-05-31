var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

let port = process.env.PORT || 3000

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});