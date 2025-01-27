var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var randomChosenColour = buttonColors[nextSequence()];
gamePattern.push(randomChosenColour);

//generate random number 
function nextSequence(){
    var randomNumber =  Math.floor(Math.random() * 4);
    return randomNumber;
}

console.log(gamePattern);