var uuid = require('uuid'); //used to generate random number

function Bear(size, color, id){
  //Must Haves
  this.id = id || uuid.v4();
  this.size = size;
  this.color = color;

  //Booleans
  this.isAwake = false;
  this.hasKids = false;
  this.isHungry = false;

  //Strings
  this.type = type || ""
  this.notes = notes || ""
  this.gender = gender || ""

}

//Update boolean values
Bear.prototype.updateAwake = function(value){
  if(value.toLowerCase() === 'true'){
    this.isAwake = true;
  } else{
    this.isAwake = false;
  }

};

Bear.prototype.updateKids = function(value){
  if(value.toLowerCase() === 'true'){
    this.hasKids = true;
  } else{
    this.hasKids = false;
  }

};

Bear.prototype.updateHungry = function(value){
  if(value.toLowerCase() === 'true'){
    this.isHungry = true;
  } else{
    this.isHungry = false;
  }

};


module.exports = Bear; //exposes the todo function to anyone who needs this file
