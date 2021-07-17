class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.hue = random(220, 370);
    this.saturation = random(20, 50);
    this.lightness = random(50, 80);

    this.update = function () {
      this.z = this.z - speed;
      
      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    };

    this.show = function () {
      var radius = 10;
      var opacity = map(this.z, width, 0, 0, 1.5);

      colorMode(HSL);

      fill(this.hue, this.saturation, this.lightness, opacity);
      noStroke();

      var sx = map(this.x / this.z, 0, 1, 0, width);
      var sy = map(this.y / this.z, 0, 1, 0, height);
      var r = map(this.z, 0, width, radius, 0);

      ellipse(sx, sy, r, r);

      var px = map(this.x / this.pz, 0, 1, 0, width);
      var py = map(this.y / this.pz, 0, 1, 0, height);

      this.pz = this.z;

      stroke(this.hue, this.saturation, this.lightness, opacity);
      strokeWeight(radius / 2);
      line(px, py, sx, sy);
    };
  }
}