//Drawing variables
var canvas;
var context;

// Game variables
var borders = [];

//Input variables
var upKey;
var rightKey;
var downKey;
var leftKey;

//Level variables
var level1 = document.getElementById("platformGameLevel1");
var level2 = document.getElementById("platformGameLevel2");
var level3 = document.getElementById("platformGameLevel3");
var level4 = document.getElementById("platformGameLevel4");
var level5 = document.getElementById("platformGameLevel5");

//Level variables
var count = 0;
var jump = false;
var liveGame = 0;
var loopActive = 0;


//Runs one page has loaded
window.onload = function(){
	//Set level names/style
	level1.innerHTML = "Level 1";
	level2.innerHTML = "Level 2";
	level3.innerHTML = "Level 3";
	level4.innerHTML = "Level 4";
	level5.innerHTML = "Level 5";

	//Assign canvas and context variables
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
	context.font = "30px Consolas";
	context.fillStyle = "white";
	context.textAlign = "center";
	context.fillText("Welcome to BuckySide's simple platform game.", canvas.width/2, canvas.height/3);
	context.fillText("Choose a level above, you can play them in any order", canvas.width/2, canvas.height/2);
	context.fillText("you want as they're all unlocked.", canvas.width/2, canvas.height/1.8);
	context.fillText("Use W-A-D to move and jump.", canvas.width/2, canvas.height/1.4);

	//Key listeners
	setupInputs();
}


function setupInputs(){
	document.addEventListener("keydown", function(event){
		if (event.key === "w") {
			upKey = true;
		} else if (event.key === "a") {
			leftKey = true;
		} else if (event.key === "s") {
			downKey = true;
		} else if (event.key === "d") {
			rightKey = true;
		}
	});
	document.addEventListener("keyup", function(event){
		if (event.key === "w") {
			upKey = false;
		} else if (event.key === "a") {
			leftKey = false;
		} else if (event.key === "s") {
			downKey = false;
		} else if (event.key === "d") {
			rightKey = false;
		}
	});
}
// To create borders
function Border (x, y, width, height, type) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.type = type;

	this.draw = function() {
		if(this.type === 1) {
			context.fillStyle = "blue";
		} else if(this.type === 2) {
			context.fillStyle = "#52C8EE";
		}
		 else if(this.type === 3) {
			context.fillStyle = "red";
		}
		 else if(this.type === 4) {
			context.fillStyle = "green";
		}
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}
// Chek for intersections
function checkIntersection(r1, r2){
	if (r1.x >= r2.x + r2.width){
		return false;
	} else if (r1.x + r1.width <= r2.x){
		return false;
	}else if (r1.y >= r2.y + r2.height){
		return false;
	}else if (r1.y + r1.height <= r2.y){
		return false;
	}else {
		return true;
	}
}
// Create player
function Player(x, y){
	this.x = x;
	this.y = y;
	this.width = 50;
	this.height = 100;
	this.xvelocity = 0;
	this.yvelocity = 0;
	this.friction = 0.1;
	this.maxVelocity = 10;
	this.active = true;

//Move with player
	this.step = function(){
		//Movement
		if (this.active){
			//Horizontal
			if(!leftKey && !rightKey || leftKey && rightKey){
				//Slow Down
				this.xvelocity *= this.friction;
			}else if(rightKey){
				//Right
				this.xvelocity ++;
			}else if(leftKey){
				//Left
				this.xvelocity --;
			}
			//Vertical
			if (upKey && !jump){
				this.yvelocity = -15;
				setTimeout(function(){
					jump = true;
				},300);
				
			}
			if(!upKey){
				jump = false;
			}
			//Apply Gravity
			this.yvelocity +=5;

			//Correct speed
			if (this.xvelocity > this.maxVelocity){
				this.xvelocity = this.maxVelocity;
			}
			if (this.xvelocity < -this.maxVelocity){
				this.xvelocity = -this.maxVelocity;
			}
			if (this.yvelocity > this.maxVelocity){
				this.yvelocity = this.maxVelocity;
			}
			if (this.yvelocity < -this.maxVelocity){
				this.yvelocity = -this.maxVelocity;
			}
			if (this.xvelocity > 0){
				this.xvelocity =Math.floor(this.xvelocity);
			}else {
				this.xvelocity = Math.ceil(this.xvelocity);
			}
			if (this.yvelocity > 0){
				this.yvelocity =Math.floor(this.yvelocity);
			}else {
				this.yvelocity = Math.ceil(this.yvelocity);
			}
			//Horizontal Collision
			let horizontalRect = {
				x: this.x + this.xvelocity,
				y: this.y,
				width: this.width,
				height: this.height
			}
			//Vertical Collision
			let verticalRect = {
				x: this.x,
				y: this.y + this.yvelocity,
				width: this.width,
				height: this.height
			}

			//Check for intersections
			for(let i = 0; i < borders.length; i++){
				let borderRect = {
					x: borders[i].x,
					y: borders[i].y,
					width: borders[i].width,
					height: borders[i].height,
					type: borders[i].type,
				}
				if(checkIntersection(horizontalRect, borderRect)){
					while(checkIntersection(horizontalRect, borderRect)){
						horizontalRect.x -= Math.sign(this.xvelocity);
					}
					this.x = horizontalRect.x;
					this.xvelocity = 0;
					//Check if game over
					if(borderRect.type === 3) {
						this.xvelocity = 0;
						this.yvelocity = 0;
						endLevel();
					}
				}
				if(checkIntersection(verticalRect, borderRect)){
					while(checkIntersection(verticalRect, borderRect)){
						verticalRect.y -= Math.sign(this.yvelocity);
					}
					this.y = verticalRect.y;
					this.yvelocity = 0;
					//Check if game over
					if(borderRect.type === 3) {
						this.xvelocity = 0;
						this.yvelocity = 0;
						endLevel();
					}
				}
			}
			this.x += this.xvelocity;
			this.y += this.yvelocity;
		}
	}
//Draw the player
	this.draw = function(){
		context.fillStyle = "black";
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}

//Create enemy
//Variables
var enemyX = 0;
var enemyY = 180;
enemyChangeDirectionX = 0;
enemyChangeDirectionY = 0;
var enemyChangeX = 6;
var enemyChangeY = 0;
var enemyHeight = 10;

function drawEnemy(){
	context.beginPath();
	context.arc(enemyX, enemyY, enemyHeight, 0, Math.PI*2);
	context.fillStyle = "green";
	context.fill();
	context.closePath();
	//X axis
	if(enemyChangeDirectionX == 1 && enemyChangeX == 6){
		enemyChangeX = -6;
		enemyChangeDirectionX = 0;
	}
	if(enemyChangeDirectionX == 1 && enemyChangeX == -6){
		enemyChangeX = 6;
		enemyChangeDirectionX = 0;
	}
	enemyX += enemyChangeX;
	if(enemyX >= 1280 || enemyX <= 0){
		enemyChangeDirectionX = 1;
	}
	//Y axis
	if(enemyChangeDirectionY == 1 && enemyChangeY == 6){
		enemyChangeY = -6;
		enemyChangeDirectionY = 0;
	}
	if(enemyChangeDirectionY == 1 && enemyChangeY == -6){
		enemyChangeY = 6;
		enemyChangeDirectionY = 0;
	}
	enemyY += enemyChangeY;
	if(enemyY >= 1280 || enemyY <= 0){
		enemyChangeDirectionY = 1;
	}
	enemyY += enemyChangeY;
	//Check for collision with player
	if(enemyX >= mainPlayer.x + mainPlayer.width){
		//console.log(mainPlayer.x);
	}else if(enemyX + enemyHeight <= mainPlayer.x){
		//console.log(mainPlayer.x);
	}else if(enemyY >= mainPlayer.y + mainPlayer.height){
		//console.log(mainPlayer.x);
	}else if(enemyY + enemyHeight <= mainPlayer.y){
		//console.log(mainPlayer.x);
	}else{
		endLevelDeath();
	}
}


//End level
function endLevel(){
	delete mainPlayer;
	liveGame = 0;
	borders = [];
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
	context.clearRect(0, 0, 1280, 720);
	context.font = "30px Consolas";
	context.fillStyle = "white";
	context.textAlign = "center";
	//context.fillText("Congratulations, you've finished the level! On to the next one.", canvas.width/2, canvas.height/2);
	words = "Congratulations, you've finished the level! On to the next one."
	count = 0;
	drawLevelText();

}

//End level if hit by an enemy
function endLevelDeath(){
	delete mainPlayer;
	liveGame = 0;
	borders = [];
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
	context.clearRect(0, 0, 1280, 720);
	context.font = "30px Consolas";
	context.fillStyle = "white";
	context.textAlign = "center";
	//context.fillText("Congratulations, you've finished the level! On to the next one.", canvas.width/2, canvas.height/2);
	words = "You should avoid the green balls! Level failed."
	count = 0;
	drawLevelText();
	//Destroy enemy
	clearInterval(makeEnemy);
}

// ************ Creating levels ***************

// Level 1

function loadLevel1(){
	//Reset
	borders = [];

	//Text
	liveGame = 0;
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
	context.clearRect(0, 0, 1280, 720);
	words = "A simple level to test the movement, get to the red platform to complete."
	count = 0;
	drawLevelText();
	setTimeout(drawLevel1, 5000);
}

function drawLevel1() {
	liveGame = 1;
	//Game loop
	if(loopActive == 0){
		gameLoop = setInterval(stepLevel, 1000/60);
		loopActive = 1;
	}

	//Player
	mainPlayer = new Player(100, 600);

	//End of canvas borders
	borders.push(new Border(-10, 0 ,10, 720, 1));
	borders.push(new Border(-10, 720 ,1280, 10, 1));
	borders.push(new Border(1280, 0 ,10, 720, 1));
	borders.push(new Border(-10, -10 ,1280, 10, 1));

	//Borders
	borders.push(new Border(0, 560 ,100, 10, 2));
	borders.push(new Border(400, 420, 900, 10, 2));
	borders.push(new Border(0, 360 ,100, 10, 2));
	borders.push(new Border(400, 220, 900, 10, 2));
	borders.push(new Border(900, 210, 50, 10, 3));
}

// Level 2

function loadLevel2(){
	//Reset
	borders = [];

	//Text
	liveGame = 0;
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
	context.clearRect(0, 0, 1280, 720);
	words = "Now you have to dodge the green balls in order to survive."
	count = 0;
	drawLevelText();
	setTimeout(drawLevel2, 4000);
}

function drawLevel2() {
	liveGame = 1
	//Game loop
	if(loopActive == 0){
		gameLoop = setInterval(stepLevel, 1000/60);
		loopActive = 1;
	}

	//Player
	mainPlayer = new Player(500, 600);

	//End of canvas borders
	borders.push(new Border(-10, 0 ,10, 720, 1));
	borders.push(new Border(-10, 720 ,1280, 10, 1));
	borders.push(new Border(1280, 0 ,10, 720, 1));
	borders.push(new Border(-10, -10 ,1280, 10, 1));

	//Borders
	borders.push(new Border(140, 660 ,100, 10, 2));
	borders.push(new Border(400, 420, 600, 10, 2));
	borders.push(new Border(940, 590 ,130, 10, 2));
	borders.push(new Border(400, 280, 180, 10, 2));
	borders.push(new Border(900, 210, 50, 10, 3));

	//Enemy
	makeEnemy = setInterval(drawEnemy, 1000/60);
}

//Draw text
function drawLevelText() {
	var pause = 50;
	var chars;
	context.font = "30px Consolas";
	context.fillStyle = "white";
	context.textAlign = "center";
	count ++;
	chars = words.substr(0, count);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillText(chars, canvas.width/2, canvas.height/2);
	if (count < words.length){
    	setTimeout(drawLevelText, pause);
	}
}


// Other functions

function stepLevel(){
	//Step player
	if(liveGame == 1){
		mainPlayer.step();
		//Draw everything
		draw();
	}
}

function draw(){
	//Draw the player
	if(liveGame == 1){
		//Clear the canvas
		context.fillStyle = "#383738";
		context.fillRect(0, 0, 1280, 720);
		//Draw the player
		mainPlayer.draw();
	}

	//Draw the borders
	for (let i = 0; i < borders.length; i++){
		borders[i].draw();
	}
}