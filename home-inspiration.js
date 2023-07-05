// function([string1, string2],target id,[color1,color2])    
 consoleText(['“You do not find the happy life. You make it.” – Camilla Eyring Kimball', '“The most wasted of days is one without laughter.” – E.E. Cummings', '“Make each day your masterpiece.” – John Wooden'], 'text',['#131313']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 80)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'home-inspirational-underscore hidden'
      visible = false;

    } else {
      con.className = 'home-inspirational-underscore'

      visible = true;
    }
  }, 400)
}
