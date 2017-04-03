function Bird() {
  this.x = 20;
  this.y = height/2;
  this.w = 20;
  this.gravity = 0.4;
  this.velocity = 0;
  this.force = 7.4;

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.97
    if(this.y>height-this.w || this.y<0) {
      failed();
    }
  }

  this.jump = function() {
    this.velocity = 0
    this.velocity -=this.force;
  }

  this.show = function() {
    fill(255);
    rect(this.x,this.y,this.w,this.w)
  }
}




  function failed() {
     noLoop()
     select("#start").show()
  }
