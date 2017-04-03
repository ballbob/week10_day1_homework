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

// var detective = {
//     name : 'Ace Ventura',
//     pet : 'monkey'
//   }

// var printName = function(detective) {
//   return detective.name
// }

// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// }

// console.log(detectiveInfo());

// Episode 5

// var murderer = 'rick';

// var outerFunction = function(){
//   var murderer = 'marc';

//   var innerFunction = function(){
//     murderer = 'valerie';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('the murderer is ', murderer);
// Episode 6 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.