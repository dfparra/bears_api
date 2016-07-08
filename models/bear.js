var uuid = require('uuid'); //used to generate random number

function Bear(size, color,id){
  //Must Haves
  this.id = id || uuid.v4();
  this.size = size;
  this.color = color;

  //Booleans
  this.isAwake = false;
  this.hasKids = false;
  this.isHungry = false;

  //Strings


}

//Update boolean values
Bear.prototype.updateAwake = function(value){
  if(value.toLowerCase() === 'true'){
    this.isComplete = true;
  } else{
    this.isComplete = false;
  }

};

Bear.prototype.updateAwake = function(value){
  if(value.toLowerCase() === 'true'){
    this.isComplete = true;
  } else{
    this.isComplete = false;
  }

};

Bear.prototype.updateAwake = function(value){
  if(value.toLowerCase() === 'true'){
    this.isComplete = true;
  } else{
    this.isComplete = false;
  }

};


module.exports = Bear; //exposes the todo function to anyone who needs this file
