var express = require('express');
var app = express();

app.use(express.static('dist'));
app.use("/app", express.static('src/app'));
app.use("/bower_components", express.static('bower_components'));

app.listen(3030, function () {
  console.log('Example app listening on port 3000!');
});
