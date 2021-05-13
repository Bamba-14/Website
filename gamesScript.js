var gamesPlayer = document.getElementById("gamesPlayer");
var gamesBlock = document.getElementById("gamesBlock");
function gamesJump()
{
	if(gamesPlayer.classList != "animate")
	{
		gamesPlayer.classList.add("animate");
	}
	setTimeout(function()
	{
		games.gamesPlayer.classList.remove("animate");
	}, 500);
}

var checkHit = setInterval(function()
{
	var gamesPlayerTop= parseInt(window.getComputedStyle(gamesPlayer).GetPropertyValue("top"));
	var gamesBlockLeft= parseInt(window.getComputedStyle(gamesBlock).GetPropertyValue("left"));
	if(gamesBlockLeft<20 && gamesBlockLeft>0 && gamesPlayerTop >=130)
	{
		gamesBlock.style.animation ="none";
		gamesBlock.style.display = "none";
		alert("u lose.");
	}
}, 10);