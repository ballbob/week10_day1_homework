// Go through each sample code and work out what the output will be and explain what happened.

// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

//the output will be 'Keith' - the variable is defined outside of the function, so it is accessible. 'Global scope'.

// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

//the output will be '3' - the variable 'score' in result is locally defined, so calling result will give that version.

// Episode 3

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

//the output from allSuspects has Harvey has suspect 3 - the last console log will show suspect three as Keith.

// Episode 4

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

//when a variable of the same name is defined inside a function, even an object, it *should* give out that version. 
//so the 'name' in detective is replaced with Poirot only for detectiveInfo.
//'Poirot'.
//wrong!!
//the 'name' key is being changed when detectiveInfo is called!

// Episode 5

var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//when you run outerfunction, innerfunction changes murderer to 'valerie'. no 'var' is here, so it is globally defined. Valerie should be displayed - unless it was Marc or Rick who swiped the 'var'.

//I was wrong! The murderer is Rick.

//The global assignment outside of outerFunction seems to override the global-scope change in innerFunction. 

//This is because it has been defined within the function already. The first thing to overwrite is the defined 'murderer' variable.

// Episode 6 - Make up your own episode/s!

//What will this display?

var sceneOfTheCrime = "Billiards room"

function sceneDisplay (){
  sceneOfTheCrime = "Library"
  console.log("Kitchen")
}

sceneDisplay();