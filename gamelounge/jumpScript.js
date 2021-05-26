//Fill variables
var jumpPlayer = document.getElementById("jumpPlayer");
var jumpObstacle1 = document.getElementById("jumpObstacle1");
var counter=0;
var boolStart=false;
//Set final score invisible at start of the game
finalScore.classList.add("inactiveFinalScore");

//Function for player jump
function jump(){
    if(jumpPlayer.classList == "animate"){return};
    //add animation to player
    jumpPlayer.classList.add("animatePlayer");
    setTimeout(function(){
        jumpPlayer.classList.remove("animatePlayer");
    },300);
}

//Function for obstacle1 to move (game start)
function start(){
	document.getElementById("currentScoreSpan").innerHTML = counter;
    if(jumpObstacle1.classList == "animate"){return}
    //add animation ¸for the obstacle and start keeping score
    jumpObstacle1.style.animation = "jumpObstacleAnimation1 2s infinite linear";
    if(boolStart == 0){
    	jumpObstacle1.addEventListener("animationiteration", scoreTrack);
    	boolStart=true;
    	gameOver();
    }else{
    	restart();
    }
    
}

//Update score keep score
function scoreTrack(){
	random_bg_color();
	counter++;
	document.getElementById("currentScoreSpan").innerHTML = counter;
}

function gameOver(){
	var checkHit = setInterval(function() {
	    let jumpPlayerTop = parseInt(window.getComputedStyle(jumpPlayer).getPropertyValue("top"));
	    let jumpObstacle1Left = parseInt(window.getComputedStyle(jumpObstacle1).getPropertyValue("left"));
	    if(jumpObstacle1Left<50 && jumpObstacle1Left>-20 && jumpPlayerTop>=130){
	        jumpObstacle1.style.animation = "paused";
	        endCounter=counter;
	        stop(endCounter);
	    }
	}, 1);
}

//Game over, show final score
function stop(endCounter){
	document.getElementById("finalScoreSpan").innerHTML = endCounter;
	finalScoreSpan.classList.remove("inactiveFinalScore");
	finalScore.classList.remove("inactiveFinalScore");
	currentScoreSpan.classList.add("inactiveCurrentScore");
	currentScore.classList.add("inactiveCurrentScore");
}

//Game restart
function restart(){
	counter=0;
	document.getElementById("currentScoreSpan").innerHTML = counter;
	finalScoreSpan.classList.add("inactiveFinalScore");
	finalScore.classList.add("inactiveFinalScore");
	currentScoreSpan.classList.remove("inactiveCurrentScore");
	currentScore.classList.remove("inactiveCurrentScore");
	jumpObstacle1.style.animation = "jumpObstacleAnimation1 2s infinite linear";
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    jumpObstacle1.style.backgroundColor = bgColor;
    document.documentElement.style.setProperty('--jumpObstacle1-box-shadow-color', bgColor);
    }