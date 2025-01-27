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
    //update level
    level += 1;
    //update title
    updateTitle();
}

//start game function 
$(document).on('keydown', function(){
    //start new sequence if level if no zero
    if(level === 0 ){
        nextSequence();
        //update game title
        updateTitle();
    }
});

//check answer 
function checkAnswer(){
    var gameOver = false;
    // compare user patter with game pattern 
    for(var i = 0; i<userClickedPatter.length; i++){
        if(userClickedPatter[i] != gamePattern[i]){
            gameOver = true;
            console.log('you lose\n your patter: ' + userClickedPatter + '\n game patter:\n' + gamePattern);

        }
    }
    //reset user pattern when finish play
    if(userClickedPatter.length === gamePattern.length && !gameOver){
        userClickedPatter = [];
        //next sequence 
        setTimeout(function(){
            nextSequence();
        }, 1000);
        
    }
    //game over
    if(gameOver){
        //play lose sound
        playSound('wrong');
        //change body backgrund
        $('body').addClass('game-over');
        //remove background
        setTimeout(function(){
            $('body').removeClass('game-over');
        }, 200);
        //change game title
        $('h1').text('Game Over, Press Any Key to Restart');
        //reset game
        startOver();
    }
   

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
    //check answers
    checkAnswer();

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
function audiodObj(name){
    return new Audio('./sounds/' + name + '.mp3');
}

//function update h1
function updateTitle(){
    var title = $('h1');
    title.text('Level ' + level);
}

//start over
function startOver(){
    userClickedPatter = [];
    gamePattern = []
    level = 0;
}