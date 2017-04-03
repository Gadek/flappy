var pipes = []
var looping = true;
var punkty;
var txt;
var bird;
var add = true;
function setup() {
  createCanvas(500,330);
  select("#scores").position(width/2,0);
  select("#start").position(width/2-60,height/3*2)
  select("#start").mousePressed(started);
  select("#start").show();
  noLoop()
}
function draw() {
  background(0,250,154);
  bird.update();
  bird.show();
  for(var i=pipes.length-1 ; i>=0 ; i--) {
    pipes[i].update();
    pipes[i].show();
    if(pipes[i].crash()) {
      failed()
    }
    if(pipes[i].across() && add){
      punkty++;
      add = false
      setTimeout(makeAddTrue,200)
    }
  }
  select("#scores").html("punkty: "+punkty)
}

function makeAddTrue() {
  add=true
}


function keyPressed() {
  if(key == ' ') {
    bird.jump();
  }
  if(key == 'P') {
    if(looping) noLoop();
    else loop();
    looping=!looping
  }
}

function mousePressed() {
  bird.jump();
}


function started() {
  punkty = 0;
  for(var i=0 ; i<3 ; i++) {
    pipes[i] = new Pipe(i*width/3+width)
  }
  bird = new Bird();
  select("#start").hide()
  loop();
}
