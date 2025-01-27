var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPatter = [];
var randomChosenColour = buttonColors[nextSequence()];
gamePattern.push(randomChosenColour);

//generate random number 
function nextSequence(){
    var randomNumber =  Math.floor(Math.random() * 4);
    return randomNumber;
}

// generate audop object 
function audiodObj(color){
    return new Audio('./sounds/' + color + '.mp3');
}

//get clicked buttons
$('.btn').on('click', function(){
    var btnId = this.id;
    userClickedPatter.push(btnId)
    console.log(userClickedPatter);
});

$(document).on('keydown', function(event){
    if(event.key === 't'){
        var selectedColor = $('.' + randomChosenColour);
        var sound = audiodObj(randomChosenColour);
        sound.play();
        selectedColor.animate({opacity: 0}, 70).animate({opacity: 1}, 70)

    }
});

