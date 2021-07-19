var stars = [];
var starCount;
var starSpeed = 1;

var headingHue = 0;

let starEasing = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);

  starCount = map(width, 200, 6000, 500, 3000);

  for (var i = 0; i < starCount; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(240, 40, 10);
  colorMode(HSL);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion)');

  translate(width / 2, height / 2);

  for (var i = 0; i < stars.length; i++) {
    if (!reducedMotion.matches) {
      stars[i].update();
    }

    stars[i].show();
  }

  translate(-width / 2, -height / 2);

  changeHeadingColor();

  if (!reducedMotion.matches) {
    observeButtons();
  }
}

function changeHeadingColor() {
  let heading = select(".section-content h1");

  headingHue += .5;

  if (headingHue == 360) {
    headingHue = 0;
  }

  let headingColor = color(headingHue, 50, 50);

  heading.style('color', headingColor);
}

function observeButtons() {
  let buttonHovered = select(".a-button:hover");

  if (buttonHovered) {
    targetStarSpeed = 100;
  } else {
    targetStarSpeed = 1;
  }

  let deltaStarSpeed = targetStarSpeed - starSpeed;

  starSpeed += deltaStarSpeed * starEasing;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
