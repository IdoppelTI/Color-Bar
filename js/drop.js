function Drop() {
  this.pos = createVector(width / 2, 10 * vh);
  this.start = true;
  this.vel = createVector(0, 10);
  this.height = 5 * vh;
  this.width = 5 * vh;
  this.currentHeight = this.height;
  this.currentWidth = this.width;
  this.frameCounter = 0;
  this.colValue = round(random(1, 2));

  this.render = function() {
    push();
    if (this.colValue == 1) {
      fill(colRed);
    } else {
      fill(colBlue);
    }
    ellipse(this.pos.x, this.pos.y, this.currentWidth, this.currentHeight);
    pop();
  }

  this.update = function() {
    if (this.start) {
      this.pos.add(this.vel);
      if (this.pos.x < 0 + this.width/2 || this.pos.x > width - this.width/2) {
        this.currentWidth = lerp(this.width, this.width, 0.5);
        this.vel.x *= -1;
      }else if (this.pos.y - this.height < 0) {
        this.vel.y *= -1;
      }else{
        if (this.currentWidth != this.widht || this.currentHeight != this.height) {
          this.currentWidth = this.width;
          this.currentHeight = this.height;
        }
      }
    }
  }
}
