var gamesPlayer = document.getElementById("gamesPlayer");
var gamesBlock = document.getElementById("gamesBlock");
var counter=0;
function gamesJump()
{
	if(gamesPlayer.classList == "animate"){return}
	gamesPlayer.classList.add("animate");
	setTimeout(function() {
		games.gamesPlayer.classList.remove("animate");
	}, 500);
}

var checkHit = setInterval(function() {
	let gamesPlayerTop = parseInt(window.getComputedStyle(gamesPlayer).getPropertyValue("top"));
	let gamesBlockLeft = parseInt(window.getComputedStyle(gamesBlock).getPropertyValue("left"));
	if(gamesBlockLeft<20 && gamesBlockLeft>-20 && gamesPlayerTop >=130) {
		gamesBlock.style.animation ="none";
		alert("Game Over. score: "+Math.floor(counter/100));
		counter=0;
		gamesBlock.style.animation = "block 1s infinite linear";
		}else{
			counter++;
			document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
		}
}, 10);
