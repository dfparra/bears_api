
var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

//import my models folder
var Bear = require('./models/bear.js');

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
  // response.send('GET bears :color');

  var bear = db.get('bears')
                 .find({color: request.params.color})
                 .value();
  response.send(bear);

});

server.get('/bears/:awake', function(request, response){
  // response.send('GET bears :awake');

  var bear = db.get('bears')
                 .find({isAwake: request.params.awake})
                 .value();
  response.send(bear);

});

server.get('/bears/:kids', function(request, response){
  // response.send('GET bears :kids');

  var bear = db.get('bears')
                 .find({hasKids: request.params.kids})
                 .value();
  response.send(bear);

});

server.get('/bears/:type', function(request, response){
  // response.send('GET bears :type');

  var bear = db.get('bears')
                 .find({type: request.params.type})
                 .value();
  response.send(bear);

});

server.get('/bears/:hungry', function(request, response){
  // response.send('GET bears :hungry');

  var bear = db.get('bears')
                 .find({isHungry: request.params.hungry})
                 .value();
  response.send(bear);

});

server.get('/bears/:notes', function(request, response){
  // response.send('GET bears :id');

  var bear = db.get('bears')
                 .find({notes: request.params.notes})
                 .value();
  response.send(bear);

});

server.get('/bears/:gender', function(request, response){
  // response.send('GET bears :gender');

  var bear = db.get('bears')
                 .find({gender: request.params.gender})
                 .value();
  response.send(bear);

});

//POST ROUTES

server.post('/bears', function(request, response){
  // response.send('POST bear');
  // var bear = {
  //   id: uuid.v4(),
  //   size: request.body.size,
  //   color: request.body.color,
  //   isAwake: false,//request.body.isAwake,
  //   hasKids: false,//request.body.hasKids,
  //   type: request.body.type,
  //   isHungry: false,//request.body.isHungry,
  //   notes: request.body.notes,
  //   gender: request.body.gender,
  //
  // };

  //New code
  var bear = new Bear(request.body.size,request.body.color);

  var result = db.get('bears')
                 .push(bear)
                 .last()
                 .value();
  response.send(result);
});

//UPDATE ROUTES

server.put('/bears/:id', function(request, response){
  // response.send('PUT bears :id');

  var updatedBearInfo = {
    size: request.body.size,
    color: request.body.color,
    isAwake: request.body.isAwake,
    hasKids: request.body.haskids,
    type: request.body.type,
    isHungry: request.body.isHungry,
    notes: request.body.notes,
    gender: request.body.gender
  };

  var updatedBear = db.get('bears')
                      .find({id: request.params.id})
                      .assign(updatedBearInfo)
                      .value();
  response.send(updatedBear);

});

//DELETE ROUTES

server.delete('/bears/:id', function(request, response){
  // response.send('DELETE bears :id');

  var bear = db.get('bears')
                .remove({id: request.params.id})
                .value();
  response.send(bear);

});

server.listen(port, function(){
  console.log('Now listening on port: ',port);
});
