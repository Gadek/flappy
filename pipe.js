function Pipe(x) {
  this.x = x;
  this.whole = 95;
  this.pos = random(30,height-this.whole-30);
  this.w = 20;
  this.acc = 0.0005
  this.speed = 1.6;
  this.show = function() {
    fill(0);
    rect(this.x,0,this.w,this.pos)
    rect(this.x,this.pos+this.whole,this.w,height-this.pos-this.whole)
  }
  this.update = function() {
    this.speed += this.acc
    this.x -=this.speed;
    if(this.x + this.w<0) {
      this.pos = random(30,height-this.whole-30);
      this.x=width
    }
  }
  this.crash = function() {
    if(bird.x+bird.w>this.x && bird.x<this.x+this.w &&
      (bird.y<this.pos || bird.y+bird.w>this.pos+this.whole)) return true;
  }
  this.across = function() {
    if(bird.x>this.x+this.w) return true;
  }
}
