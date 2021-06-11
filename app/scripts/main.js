console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.onload = function()
{
   document.body.onscroll =  Test.callFn;
}

var Test = new function()
{
   this.callFn = function()
   {
      console.log('Calling this function');
   }
}
console.log('EGGGGGGGGSSSS');
function randomColor(){
    var r = getRandomInt(0,255);
    var g = getRandomInt(0,255);
    var b = getRandomInt(0,255);
    document.getElementById('rInput').value = r;
    document.getElementById('gInput').value = g;
    document.getElementById('bInput').value = b;
    document.getElementById('hexInput').value = rgbToHex(r,g,b);
    fadeColor();
}
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fadeColor(){
    var a = document.getElementById('hexInput').value;
    var col;
    if (a){
        col = parseColor(a);
        document.getElementById('rInput').value = col[0];
        document.getElementById('gInput').value = col[1];
        document.getElementById('bInput').value = col[2];
    } else {
        var r = document.getElementById('rInput').value;
        var g = document.getElementById('gInput').value;
        var b = document.getElementById('bInput').value;
        
        document.getElementById('hexInput').value = rgbToHex(r,g,b);
        col=[parseInt(r),parseInt(g),parseInt(b)]
    }

    // now we have color, we need to determine its category
    const sum = col.reduce((a, b) => a + b, 0);
    const lightness = (sum / col.length) || 0;
    
    // need 10 colors total

    var colArray = [];
    if (lightness<40){
        // dark
        for (var i = 0; i < 9; i++) {
            var lc = LightenDarkenColor(col[0],col[1],col[2],i*20);
            var nc = parseColor(lc);
            colArray.push(nc);
        }
        colArray.push(parseColor(LightenDarkenColor(col[1],col[0],col[2],10*20)));
        colArray.push(parseColor(LightenDarkenColor(col[0],col[1],col[2],12*20)));
    } else if (lightness<200){
        // mid
        for (var i = -5; i < 4; i++) {
            colArray.push(parseColor(LightenDarkenColor(col[0],col[1],col[2],i*20)));
        }
        colArray.push(parseColor(LightenDarkenColor(col[1],col[0],col[2],6*20)));
        colArray.push(parseColor(LightenDarkenColor(col[0],col[1],col[2],8*20)));
    } else {
        // light
        for (var i = -10; i < -1; i++) {
            colArray.push(parseColor(LightenDarkenColor(col[0],col[1],col[2],i*20)));
        }
        colArray.push(parseColor(LightenDarkenColor(col[1],col[0],col[2],2*20)));
        colArray.push(parseColor(LightenDarkenColor(col[0],col[1],col[2],5*20)));
    }

    // colours are defined now, we just have to apply them in order (with fade)
    document.getElementById('cityfront').style.backgroundColor = colToHex(colArray[0]);
    document.getElementById('city1').style.fill = colToHex(colArray[0]);
    document.getElementById('city2').style.fill = colToHex(colArray[1]);
    document.getElementById('city2front').style.backgroundColor = colToHex(colArray[1]);
    document.getElementById('city3').style.fill = colToHex(colArray[2]);
    document.getElementById('city4').style.fill = colToHex(colArray[3]);
    document.getElementById('city5').style.fill = colToHex(colArray[4]);
    document.getElementById('mountain1').style.fill = colToHex(colArray[5]);
    document.getElementById('mountain2').style.fill = colToHex(colArray[6]);
    document.getElementById('mountain3').style.fill = colToHex(colArray[7]);
    document.getElementById('mountain4').style.fill = colToHex(colArray[8]);
    document.getElementById('sun').style.fill = colToHex(colArray[9]);
    document.body.style.backgroundColor = colToHex(colArray[10]);
}
function LightenDarkenColor(ra,ga,ba, amt) {
    var col = rgbToHex(ra,ga,ba);
    var usePound = false;
  
    if (col[0] == '#') {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    var c = (g | (b << 8) | (r << 16)).toString(16);

    while (c.length<6){
        c='0'+c;
    }
    return (usePound?'#':'') + c;
  
}
function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  function colToHex(col) {
    return '#' + componentToHex(col[0]) + componentToHex(col[1]) + componentToHex(col[2]);
  }
function parseColor(input) {
    if (input.substr(0,1)=='#') {
    var collen=(input.length-1)/3;
    var fact=[17,1,0.062272][collen-1];
    return [
        Math.round(parseInt(input.substr(1,collen),16)*fact),
        Math.round(parseInt(input.substr(1+collen,collen),16)*fact),
        Math.round(parseInt(input.substr(1+2*collen,collen),16)*fact)
    ];
    }
    else return input.split('(')[1].split(')')[0].split(',').map(x=>+x);
}