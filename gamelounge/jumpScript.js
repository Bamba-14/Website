//Fill variables
var jumpPlayer = document.getElementById("jumpPlayer");
var jumpObstacle1 = document.getElementById("jumpObstacle1");
var jumpObstacle2 = document.getElementById("jumpObstacle2");
var jumpLight = document.getElementById("jumpLight");
var jumpGameTitle = document.getElementById("jumpGameTitle");
var sessionHighScore = document.getElementById("sessionHighScore");
var sessionScore = document.getElementById("sessionScore");
var counter=0;
var totalCounter=0;
var bestCounter=0;
var boolStart=false;
var randomEndings = ["You tried.", "You're supposed to jump over the lights... look at his knee now.", "I'm sure you can do better!", "That was amazing! I think.", "You only get a participation award for this one.", "Those are rookie numbers!", "It is what it is", "Did you even beat your highscore?", "Yaaaaaaaaaaaaaaaaaaay, now find the jump button.", "The jump button is located next to the restart button.", "You should really try clicking the jump button."];
//Set final score, session's scores and title invisible at start of the game
finalScore.classList.add("inactiveFinalScore");
jumpGameTitle.classList.add("startJumpGameTitle");
sessionHighScore.classList.add("invisibleSessionScore");
sessionScore.classList.add("invisibleSessionScore");
document.getElementById("startButtonSpan").innerHTML = "Start";
document.getElementById("startTextSpan").innerHTML = "Welcome to Buckyside's jump game! Press the jump button to... well jump over the lights!";
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
    	if(boolStart == 0){
    		jumpGameTitle.classList.remove("startJumpGameTitle");
    		jumpGameTitle.classList.add("animateStartText");
    		setTimeout(function(){
    			jumpLight.classList.add("lightStartTurnOn");
	    		setTimeout(function(){
	    		jumpLight.classList.remove("lightStartTurnOn");
	    		jumpLight.classList.add("lightFlickering");
			    //add animation ¸for the obstacle and start keeping score
			    jumpObstacle1.style.animation = "jumpObstacleAnimation1 2s infinite linear";
			    jumpObstacle2.style.animation = "jumpObstacleAnimation2 5s infinite linear";
			    },2000);
			},3000);
		    	jumpObstacle1.addEventListener("animationiteration", scoreTrack);
		    	jumpObstacle2.addEventListener("animationiteration", scoreTrack);
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
	    let jumpObstacle2Left = parseInt(window.getComputedStyle(jumpObstacle2).getPropertyValue("left"));
	    //if(jumpObstacle1Left<50 && jumpObstacle1Left>-20 && jumpPlayerTop>=30){
	    if(jumpObstacle1Left<65 && jumpObstacle1Left>-5 && jumpPlayerTop>=30){
	        jumpObstacle1.style.animation = "paused";
	        jumpObstacle2.style.animation = "paused";
	        endCounter=counter;
	        totalCounter+=endCounter;
	        if(endCounter>bestCounter){
	        	bestCounter=endCounter;
	        }
	        document.getElementById("startButtonSpan").innerHTML = "Restart";
	        jumpPlayer.classList.add("animateHurtPlayer");
	        stop(endCounter);
	    }
	    if(jumpObstacle2Left<65 && jumpObstacle2Left>5 && jumpPlayerTop>=40){
	        jumpObstacle1.style.animation = "paused";
	        jumpObstacle2.style.animation = "paused";
	        endCounter=counter;
	        totalCounter+=endCounter;
	        if(endCounter>bestCounter){
	        	bestCounter=endCounter;
	        }
	        document.getElementById("startButtonSpan").innerHTML = "Restart";
	        jumpPlayer.classList.add("animateHurtPlayer");
	        stop(endCounter);
	    }
	}, 1);
}

//Game over, show final score
function stop(endCounter){
	var randomIndex = Math.floor(Math.random() * 12);
	document.getElementById("startTextSpan").innerHTML = randomEndings[randomIndex];
	document.getElementById("finalScoreSpan").innerHTML = endCounter;
	document.getElementById("sessionHighScoreSpan").innerHTML = bestCounter;
	document.getElementById("sessionScoreSpan").innerHTML = totalCounter;
	finalScoreSpan.classList.remove("inactiveFinalScore");
	finalScore.classList.remove("inactiveFinalScore");
	currentScoreSpan.classList.add("inactiveCurrentScore");
	currentScore.classList.add("inactiveCurrentScore");
	sessionHighScore.classList.remove("invisibleSessionScore");
	sessionScore.classList.remove("invisibleSessionScore");
	sessionHighScore.classList.add("visibleSessionScore");
	sessionScore.classList.add("visibleSessionScore");
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
	jumpObstacle2.style.animation = "jumpObstacleAnimation2 5s infinite linear";
	jumpPlayer.classList.remove("animateHurtPlayer");
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    jumpObstacle1.style.backgroundColor = bgColor;
    jumpObstacle2.style.backgroundColor = bgColor;
    document.documentElement.style.setProperty('--jumpObstacle1-box-shadow-color', bgColor);
    }
