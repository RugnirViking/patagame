"use strict";var prevScrollpos=window.pageYOffset,s=window.pageYOffset;window.onload=function(){document.getElementById("parallax").onscroll=Test.callFn};var Test=new function(){this.callFn=function(){var e=document.getElementById("parallax").scrollTop,t=document.getElementById("scrollprompt");0===e&&t.classList.contains("fade")?document.getElementById("scrollprompt").classList.remove("fade"):t.classList.contains("fade")||document.getElementById("scrollprompt").classList.add("fade")}};function randomColor(){var e=getRandomInt(0,255),t=getRandomInt(0,255),o=getRandomInt(0,255);document.getElementById("rInput").value=e,document.getElementById("gInput").value=t,document.getElementById("bInput").value=o,document.getElementById("hexInput").value=rgbToHex(e,t,o),fadeColor()}function getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function fadeColor(){var e,t=document.getElementById("hexInput").value;if(t)e=parseColor(t),document.getElementById("rInput").value=e[0],document.getElementById("gInput").value=e[1],document.getElementById("bInput").value=e[2];else{var o=document.getElementById("rInput").value,n=document.getElementById("gInput").value,l=document.getElementById("bInput").value;document.getElementById("hexInput").value=rgbToHex(o,n,l),e=[parseInt(o),parseInt(n),parseInt(l)]}var r=e.reduce(function(e,t){return e+t},0)/e.length||0,a=[];if(r<40){for(var u=0;u<9;u++){var c=parseColor(LightenDarkenColor(e[0],e[1],e[2],20*u));a.push(c)}a.push(parseColor(LightenDarkenColor(e[1],e[0],e[2],200))),a.push(parseColor(LightenDarkenColor(e[0],e[1],e[2],240)))}else if(r<200){for(u=-5;u<4;u++)a.push(parseColor(LightenDarkenColor(e[0],e[1],e[2],20*u)));a.push(parseColor(LightenDarkenColor(e[1],e[0],e[2],120))),a.push(parseColor(LightenDarkenColor(e[0],e[1],e[2],160)))}else{for(u=-10;u<-1;u++)a.push(parseColor(LightenDarkenColor(e[0],e[1],e[2],20*u)));a.push(parseColor(LightenDarkenColor(e[1],e[0],e[2],40))),a.push(parseColor(LightenDarkenColor(e[0],e[1],e[2],100)))}document.getElementById("cityfront").style.backgroundColor=colToHex(a[0]),document.getElementById("city1").style.fill=colToHex(a[0]),document.getElementById("city2").style.fill=colToHex(a[1]),document.getElementById("city2front").style.backgroundColor=colToHex(a[1]),document.getElementById("city3").style.fill=colToHex(a[2]),document.getElementById("city4").style.fill=colToHex(a[3]),document.getElementById("city5").style.fill=colToHex(a[4]),document.getElementById("mountain1").style.fill=colToHex(a[5]),document.getElementById("mountain2").style.fill=colToHex(a[6]),document.getElementById("mountain3").style.fill=colToHex(a[7]),document.getElementById("mountain4").style.fill=colToHex(a[8]),document.getElementById("sun").style.fill=colToHex(a[9]);var d=document.getElementsByClassName("btn-primary");for(u=0;u<d.length;u++)d[u].style.backgroundColor=colToHex([a[4][1],a[4][0],a[4][2]]),d[u].style.borderColor=colToHex([a[2][1],a[2][0],a[2][2]]);document.body.style.backgroundColor=colToHex(a[10]),document.body.style.color=colToHex(a[3]),document.getElementById("contentDiv").style.color=colToHex(a[10])}function LightenDarkenColor(e,t,o,n){var l=rgbToHex(e,t,o),r=!1;"#"==l[0]&&(l=l.slice(1),r=!0);var a=parseInt(l,16),u=(a>>16)+n;255<u?u=255:u<0&&(u=0);var c=(a>>8&255)+n;255<c?c=255:c<0&&(c=0);var d=(255&a)+n;255<d?d=255:d<0&&(d=0);for(var s=(d|c<<8|u<<16).toString(16);s.length<6;)s="0"+s;return(r?"#":"")+s}function componentToHex(e){var t=parseInt(e).toString(16);return 1==t.length?"0"+t:t}function rgbToHex(e,t,o){return"#"+componentToHex(e)+componentToHex(t)+componentToHex(o)}function colToHex(e){return"#"+componentToHex(e[0])+componentToHex(e[1])+componentToHex(e[2])}function parseColor(e){if("#"!=e.substr(0,1))return e.split("(")[1].split(")")[0].split(",").map(function(e){return+e});var t=(e.length-1)/3,o=[17,1,.062272][t-1];return[Math.round(parseInt(e.substr(1,t),16)*o),Math.round(parseInt(e.substr(1+t,t),16)*o),Math.round(parseInt(e.substr(1+2*t,t),16)*o)]}