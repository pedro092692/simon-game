var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPatter = [];


//generate random number 
function nextSequence(){
    var randomNumber =  Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    var lastColor = gamePattern.slice(-1);
    //play sound
    playSound(lastColor);
    //animate
    animateButton($('#' + lastColor));
}

//get clicked buttons
$('.btn').on('click', function(){
    var btnId = this.id;
    var button = $('#' + btnId);
    userClickedPatter.push(btnId)
    //play sound 
    playSound(btnId);
    //animate button 
    animateButton(button);
});

//function play sound
function playSound(soundName){
    var sound = audiodObj(soundName);
    sound.play();
}

//function animate button
function animateButton(button){
    button.animate({opacity: 0}, 70).animate({opacity: 1}, 70);
}

// generate audio object 
function audiodObj(color){
    return new Audio('./sounds/' + color + '.mp3');
}