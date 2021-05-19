//Fill variables
var jumpPlayer = document.getElementById("jumpPlayer");
var jumpObstacle1 = document.getElementById("jumpObstacle1");
var counter=0;
//Set final score invisible at start of the game
finalScore.classList.add("inactiveFinalScore");

//Function for player jump
function jump(){
    if(jumpPlayer.classList == "animate"){return}
    //add animation to player
    jumpPlayer.classList.add("animatePlayer");
    setTimeout(function(){
        jumpPlayer.classList.remove("animatePlayer");
    },300);
}

//Function for obstacle1 to move (game start)
function start(){
    if(jumpObstacle1.classList == "animate"){return}
    //add animation to player and start keeping score
    jumpObstacle1.classList.add("animateObstacle1");
    if(counter == 0){
    	score();
    }else{
    	restart();
    }
    
}

//Check if game over
function score(){
	var checkHit = setInterval(function() {
	    let jumpPlayerTop = parseInt(window.getComputedStyle(jumpPlayer).getPropertyValue("top"));
	    let jumpObstacle1Left = parseInt(window.getComputedStyle(jumpObstacle1).getPropertyValue("left"));
	    if(jumpObstacle1Left<20 && jumpObstacle1Left>-20 && jumpPlayerTop>=130){
	        jumpObstacle1.classList.remove("animateObstacle1");
	        //alert("Game Over. score: "+Math.floor(counter/100));
	        endCounter=counter;
	        stop(endCounter);
	        //jumpObstacle1.style.animation = "jumpObstacle1 1s infinite linear";
	    }else{
			counter++;
	    	document.getElementById("currentScoreSpan").innerHTML = Math.floor(counter/100);
	    }
	}, 10);
}

//Game over, show final score
function stop(endCounter){
	document.getElementById("finalScoreSpan").innerHTML = Math.floor(endCounter/100);
	finalScoreSpan.classList.remove("inactiveFinalScore");
	finalScore.classList.remove("inactiveFinalScore");
	currentScoreSpan.classList.add("inactiveCurrentScore");
	currentScore.classList.add("inactiveCurrentScore");
}

//Game restart
function restart(){
	counter=0;
	finalScoreSpan.classList.add("inactiveFinalScore");
	finalScore.classList.add("inactiveFinalScore");
	currentScoreSpan.classList.remove("inactiveCurrentScore");
	currentScore.classList.remove("inactiveCurrentScore");
}
