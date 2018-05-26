function Player(){
  this.x = width/2;
  this.xRelative = this.x;
  this.xLerp = this.x;
  this.dragging  = false;
  this.amountBars = 3;
  this.size = width/this.amountBars;

  this.update = function(){
    this.collisionDetection();
    if (this.dragging) {
      this.x = mouseX + this.xRelative;
      if (this.x < 0) {
        this.x = 0;
      }else if(this.x > width){
        this.x = width;
      }
    }
  }

  this.render = function(){
    this.xLerp = lerp(this.x, this.xLerp, 0.5);

    push();
    fill(colRed);
    rect(this.xLerp - this.size, 95*vh, this.size, 5 * vh, 2 * vh, 0, 0, 0);
    pop();

    push();
    fill(colBlue);
    rect(this.xLerp, 95*vh, this.size, 5 * vh, 0, 2 * vh, 0, 0);
    pop();
  }

  this.collisionDetection = function(){
    if (drop.pos.y >= (height - 5 * vh - drop.height/2)) {
      if(drop.colValue == 1 && drop.pos.x > this.x - this.size && drop.pos.x < this.x && dead == false){
        drop.vel.y *= -1.01;
        drop.vel.x += random(-3, 3);
        drop.colValue = 2;
        score++;
      }else if(drop.colValue == 2 && drop.pos.x > this.x && drop.pos.x < this.x + this.size && dead == false){
        drop.vel.y *= -1.01;
        drop.vel.x += random(-3, 3);
        drop.colValue = 1;
        score++;
      }else{
        drop.vel.x = 0;
        drop.vel.y = 0;
        dead = true;
      }
    }
  }
}

function mousePressed(){
  player.dragging = true;
  player.xRelative = player.x - mouseX;
}

function mouseReleased(){
  player.dragging = false;
}
