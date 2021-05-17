var jumpPlayer = document.getElementById("jumpPlayer");
var jumpObstacle1 = document.getElementById("jumpObstacle1");
var counter=0;
function jump(){
    if(jumpPlayer.classList == "animate"){return}
    jumpPlayer.classList.add("animate");
    setTimeout(function(){
        jumpPlayer.classList.remove("animate");
    },300);
}
var checkHit = setInterval(function() {
    let jumpPlayerTop = parseInt(window.getComputedStyle(jumpPlayer).getPropertyValue("top"));
    let jumpObstacle1Left = parseInt(window.getComputedStyle(jumpObstacle1).getPropertyValue("left"));
    if(jumpObstacle1Left<20 && jumpObstacle1Left>-20 && jumpPlayerTop>=130){
        jumpObstacle1.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        jumpObstacle1.style.animation = "jumpObstacle1 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
