var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPatter = [];
var level = 0;


//generate random number 
function nextSequence(){
    var randomNumber =  Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    var lastColor = gamePattern.slice(-1);
    //play sound
    playSound(lastColor);
    //animate
    animateButton(lastColor);
}


//get clicked buttons
$('.btn').on('click', function(){
    var btnId = this.id;
    userClickedPatter.push(btnId)
    //play sound 
    playSound(btnId);
    //animate button 
    animateButton(btnId);
    //add shadow
    shadowPress(btnId);
});

//function play sound
function playSound(soundName){
    var sound = audiodObj(soundName);
    sound.play();
}

//function animate button
function animateButton(color){
    $('#' + color).animate({opacity: 0}, 70).animate({opacity: 1}, 70);
}

//shadow on press function 
function shadowPress(color){
    $('#' + color).addClass('pressed');
    setTimeout(function(){
        $('#' + color).removeClass('pressed');
    }, 100);
}

// generate audio object 
function audiodObj(color){
    return new Audio('./sounds/' + color + '.mp3');
}