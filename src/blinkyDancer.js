var BlinkyDancer = function(top, left, timeBetweenSteps){ 
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){ 
  Dancer.prototype.step.apply(this);

  this.$node.toggle();
};

var BobDancer = function(top, left, timeBetweenSteps){
  console.log(top, left);
  Dancer.apply(this, arguments);

  this.$node = $('<span class="bobdancer"></span>');
  Dancer.prototype.setPosition.call(this, top, left);
}

BobDancer.prototype = Object.create(Dancer.prototype);
BobDancer.prototype.constructor = BobDancer;
BobDancer.prototype.collision = function(){
  console.log('Tried to remove bob');
};

var TinaDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  this.$node = $('<span class="tinadancer"></span>');
  Dancer.prototype.setPosition.call(this, top, left);
}
TinaDancer.prototype = Object.create(Dancer.prototype);
TinaDancer.prototype.constructor = TinaDancer;

var GeneDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  this.$node = $('<span class="genedancer"></span>');
  Dancer.prototype.setPosition.call(this, top, left);
}
GeneDancer.prototype = Object.create(Dancer.prototype);
GeneDancer.prototype.constructor = GeneDancer;