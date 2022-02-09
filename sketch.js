// Hours
var t = 0.05;

var x1 = function (t) { return sin(t / 3.14) * 100 + sin(-t / 42) * 20 }
var y1 = function (t) { return cos(t / 3.14) * 200 }
var x2 = function (t) { return sin(t / 3.14) * 200 + sin(-t) * 2 }
var y2 = function (t) { return cos(t / 3.14) * 100 + cos(t / 24) + 02 }

// Minutes
var aX = 20, aY = 20, bX = 380, bY = 20, cX = 380, cY = 380, dX = 20, dY = 380;

var lineXa = new Array(60); 
var lineYa = new Array(60); 
var lineXb = new Array(60); 
var lineYb = new Array(60);

var m; 

// Seconds
var cx, cy;
var c2x, c2y;
var secondsRadius;

function setup() {
  background(2);
  createCanvas(800, 800);
  stroke(255);
  
  /*for (var i = 0; i < 60; i ++) {
    if (i%4 === 0) {
      lineXa [i]  = random(aX, bX);
      lineYa [i]  = random(aY, bY); 
      lineXb [i]  = random(bX, cX);
      lineYb [i]  = random(bY, cY);
    }

    if (i%4 == 1) {
      lineXa [i]  = random(bX, cX);
      lineYa [i]  = random(bY, cY); 
      lineXb [i]  = random(dX, cX);
      lineYb [i]  = random(dY, cY);
    }

    if (i%4 == 2) {
      lineXa [i]  = random(dX, cX);
      lineYa [i]  = random(cY, dY);
      lineXb [i]  = random(aX, dX); 
      lineYb [i]  = random(aY, dY);
    }

    if (i%4 == 3) {
      lineXa [i]  = random(aX, dX);
      lineYa [i]  = random(aY, dY); 
      lineXb [i]  = random(aX, bX);
      lineYb [i]  = random(aY, bY);
    }
  }*/

  for (var i = 0; i < 60; i ++) {
    switch (i%4) {
      case 0:
        lineXa [i]  = random(aX, bX);
        lineYa [i]  = random(aY, bY); 
        lineXb [i]  = random(bX, cX);
        lineYb [i]  = random(bY, cY);
        break;
      case 1: 
        lineXa [i]  = random(bX, cX);
        lineYa [i]  = random(bY, cY); 
        lineXb [i]  = random(dX, cX);
        lineYb [i]  = random(dY, cY);
        break;
      case 2:
        lineXa [i]  = random(dX, cX);
        lineYa [i]  = random(cY, dY);
        lineXb [i]  = random(aX, dX); 
        lineYb [i]  = random(aY, dY);
        break;
      case 3:
        lineXa [i]  = random(aX, dX);
        lineYa [i]  = random(aY, dY); 
        lineXb [i]  = random(aX, bX);
        lineYb [i]  = random(aY, bY);
        break;
    }
  }
  
  var radius = min(width, height) / 2;
  secondsRadius = radius * 0.18;

  cx = width / 2;
  cy = height / 2;

  c2x = width / 2;
  c2y = height / 2;
}

function draw() {
  background(20);
  stroke(225);
  strokeWeight(5);
  translate(225, 225);

  /*for (var i = 0; i < hour(); i++) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }*/
  t += 0.05;

  stroke(225);
  strokeWeight(1);
  
  for (var i = 0; i < minute(); i ++) {
    line(lineXa [i], lineYa [i], lineXb [i], lineYb [i]);
    switch (i%4) {
      case 0:
        strokeWeight(1);
        break;
      case 1:
        strokeWeight(1.5);
        break;
      case 2:
        strokeWeight(2);
        break;
      case 3:
        strokeWeight(2.5); 
        break; 
    }
  }
  
  //noStroke();

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  // var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;

  // Draw the hands of the clock
  /*stroke(225);
  strokeWeight(2);

  for (var i = 0; i < width; i +=20) {   // Seconds all linked to clock in middle of grd
    line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx+120, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx-120, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx, cy+120, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx, cy-120, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx-120, cy-120, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx+120, cy-120, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx-120, cy+120, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx+120, cy+120, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  }*/
}
