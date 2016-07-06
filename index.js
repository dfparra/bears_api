
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

//GET ROUTES

server.get('/bears', function(request, response){
  // response.send('GET bears!!!');

  var bears = db.get('bears')
                 .value();
  response.send(bears);
});

server.get('/bears/:id', function(request, response){
  // response.send('GET bears :id');
  //
  // console.log(request.params);

  var bear = db.get('bears')
                 .find({id: request.params.id})
                 .value();
  response.send(bear);
});

server.get('/bears/:size', function(request, response){
  // response.send('GET bears :size');

  var bear = db.get('bears')
                 .find({size: request.params.size})
                 .value();
  response.send(bear);

});

server.get('/bears/:color', function(request, response){
  response.send('GET bears :color');

});

server.get('/bears/:awake', function(request, response){
  response.send('GET bears :awake');

});

server.get('/bears/:kids', function(request, response){
  response.send('GET bears :kids');

});

server.get('/bears/:type', function(request, response){
  response.send('GET bears :type');

});

server.get('/bears/:hungry', function(request, response){
  response.send('GET bears :hungry');

});

server.get('/bears/:notes', function(request, response){
  response.send('GET bears :id');

});

server.get('/bears/:gender', function(request, response){
  response.send('GET bears :gender');

});

//POST ROUTES

server.post('/bears', function(request, response){
  // response.send('POST bear');
  var bear = {
    id: uuid.v4(),
    size: request.body.size,
    color: request.body.color,
    isAwake: false,
    hasKids: false,
    type: request.body.type,
    isHungry: false,
    notes: request.body.notes,
    gender: request.body.gender,

  };

  var result = db.get('bears')
                 .push(bear)
                 .last()
                 .value();
  response.send(result);
});

//UPDATE ROUTES

server.put('/bears/:id', function(request, response){
  response.send('PUT bears :id');
});

//DELETE ROUTES

server.delete('bears/:id', function(request, response){
  response.send('DELETE bears :id');
});

server.listen(port, function(){
  console.log('Now listening on port: ',port);
});
