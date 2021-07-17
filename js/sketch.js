var stars = [];
var starCount = 2000;
var speed = 20;

function setup() {
  createCanvas(screen.width, screen.height);

  for (var i = 0; i < starCount; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  colorMode(HSL);
  
  background(240, 40, 10);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
