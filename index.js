
var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.PORT || 8080;
var db = lowdb('db.json');

//Database Initialization
db.defaults({bears: []})
  .value() //runs the previous sat of commands

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/bears', function(request, response){
  var bears = db.get('bears')
                 .value();
  response.send(bears);
});



server.listen(port, function(){
  console.log('Now listening on port: ',port);
});
