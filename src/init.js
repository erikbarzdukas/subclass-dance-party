$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = "Dancer";

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });
  
  $(".acid").on("click", function(event){ 
    $('audio').attr('src', 'whiteRabbit.m4a');
    var move = function(){ 
      var spans = $('span'); 
      for (var i=0;i<spans.length; i++){
        if(spans[i].className.toString() !== 'title'){
          $('.' + spans[i].className.toString()).animate({ 
            width: $("body").width() * Math.random(),
            height: $("body").height() * Math.random() 
          }, 8000);
        } 
      }
    };
    var acidColors = function(){
      var filterVar = 'invert(100%)';
      var spans = $('span'); 
      $(document.documentElement).css({'-webkit-filter':filterVar});
    }

     setInterval(function(){ 
      var filterNum = Math.random() * 360;
      var filterVar = 'hue-rotate(' + filterNum.toString() + 'deg)'
      $(document.documentElement).css({'-webkit-filter':filterVar})
    }, 2000);

    acidColors();
    move();
  });

    
  $(".addBlinkyDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = "BlinkyDancer";

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

$(".addBobDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = "BobDancer";

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    $('.addBobDancerButton').remove();
    window.dancers.push(dancer);
    
    var floatBob = function(){
      
      dancer.$node.animate({ 
          top: window.dancers[0].top,
          left: window.dancers[0].left,
      }, 500)
      setTimeout(function(){
      window.dancers[0].collision();
      window.dancers.shift();
      if(window.dancers.length === 1){
        alert("No dancing in the restaurant!!!!");
        location.reload();
      }
     }, 500);

    }
    
    floatBob();
    setInterval(floatBob, 1000);

    //setInterval(collisionHandle, 1);

  });

$(".addTinaDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = "TinaDancer";

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

$(".addGeneDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = "GeneDancer";

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    dancer.$node.mouseover(function(){ 
      dancer.$node.animate({ 
        top: -dancer.top,
        left: -dancer.left
      })

      setTimeout(function(){
        var i = window.dancers.indexOf(dancer);
        window.dancers.splice(i, 1);
      }, 500)
    })
  });
  
$(".lineupButton").on("click", function(event){
  var distance = $("body").width() / window.dancers.length;

  for(var i = 0; i < window.dancers.length; i++){
    window.dancers[i].setPosition($('body').height() * .85, distance * i);
  }
})

});


