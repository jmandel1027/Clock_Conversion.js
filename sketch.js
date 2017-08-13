// Hours
let t = 0.05;

const x1 = (t) => { return sin(t / 3.14) * window.innerWidth/10 + sin(-t / 42) * 20 }
const y1 = (t) => { return cos(t / 3.14) * window.innerHeight/5 }
const x2 = (t) => { return sin(t / 3.14) * window.innerWidth/5 + sin(-t) * 2 }
const y2 = (t) => { return cos(t / 3.14) * window.innerHeight/10 + cos(t / 24) + 02 }

// Minutes
let aX = window.innerWidth/20
let aY = window.innerHeight/20
let bX = window.innerWidth/2 - 20
let bY = window.innerHeight/20
let cX = window.innerWidth/2 - 20
let cY = window.innerHeight/2 - 20
let dX = window.innerWidth/20
let dY = window.innerHeight/2 - 20

let lineXa = new Array(60);
let lineYa = new Array(60);
let lineXb = new Array(60);
let lineYb = new Array(60);

let m;

// Seconds
let cx, cy;
let secondsRadius;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(255);

  for (let i = 0; i < 60; i ++) {
    if(i % 4 == 0) {
      lineXa [i] = random(aX, bX);
      lineYa [i] = random(aY, bY);
      lineXb [i] = random(bX, cX);
      lineYb [i] = random(bY, cY);
    }

    if(i % 4 == 1) {
      lineXa [i] = random(bX, cX);
      lineYa [i] = random(bY, cY);
      lineXb [i] = random(dX, cX);
      lineYb [i] = random(dY, cY);
    }

    if(i % 4 == 2) {
      lineXa [i] = random(dX, cX);
      lineYa [i] = random(cY, dY);
      lineXb [i] = random(aX, dX);
      lineYb [i] = random(aY, dY);
    }

    if(i % 4 == 3) {
      lineXa [i] = random(aX, dX);
      lineYa [i] = random(aY, dY);
      lineXb [i] = random(aX, bX);
      lineYb [i] = random(aY, bY);
    }
  }
}

function draw() {
  background(0);

  // hours
  stroke(225);
  strokeWeight(2);
  translate(window.innerWidth/4 , window.innerHeight/4);

  for (let i = 0; i < hour(); i++) {
    line(x1(t - i), y1(t - i), x2(t + i), y2(t + i));
  }

  t += 0.05;

  // minutes
  //translate(window.innerWidth/9, window.innerHeight/8);

  stroke(225);
  strokeWeight(1);

  for (let i = 0; i < minute(); i ++) {
    line(lineXa [i], lineYa [i], lineXb [i], lineYb [i]);
  }

  // Seconds
  // subtract HALF_PI to make them start at the top
  let radius = min(window.innerWidth, window.innerHeight) / 8;
  secondsRadius = radius * 0.18;

  cx = window.innerWidth - window.innerWidth / 2;
  cy = window.innerHeight - window.innerHeight / 2;

  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;

  // Draw the hands of the clock
  stroke(225);
  strokeWeight(2);

  for (var i = 0; i < width; i +=20) {   // Seconds all linked to clock in middle of grd
    line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx + window.innerWidth/6, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx + window.innerWidth/6, cy - window.innerHeight/6, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx - window.innerWidth/6, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx, cy + window.innerHeight/6, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx, cy - window.innerHeight/6, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx - window.innerWidth/6, cy - window.innerHeight/6, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx - window.innerWidth/6, cy + window.innerHeight/6, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    line(cx + window.innerWidth/6, cy + window.innerHeight/6, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  }
}
