class Segment{
  constructor (x,y,dx,dy,size){
    this.loc = new JSVector(x,y); //new creates a new instance
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,0);
    this.size = size;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
    this.chaosMode = false;
  }
  run(){
    this.draw();
    this.update();
  }
  draw(){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    if (this.chaosMode == false){
      context.strokeStyle = "black";  // color to fill
      context.fillStyle = "black";
    }
    else{
    context.strokeStyle = "red";  // color to fill
    context.fillStyle = "red";
  }
    context.fill();     // render the fill
    context.stroke();
  }
  draw2(){
    context2.beginPath();
    context2.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    if (this.chaosMode == false){
      context2.strokeStyle = "black";  // color to fill
      context2.fillStyle = "black";
    }
    else{
    context2.strokeStyle = "red";  // color to fill
    context2.fillStyle = "red";
  }
    context2.fill();     // render the fill
    context2.stroke();
  }
  chaosModeSetter(enableChaosMode){
    this.chaosMode = enableChaosMode;
  }
  update(){
    this.loc.add(this.vel);
    if(this.loc.x < -1000 || this.loc.x >1000){
      this.vel.x *= -1
    }
    if(this.loc.y<-1000 || this.loc.y>1000){
      this.vel.y *= -1
    }
    //console.log(this.chaosMode);
    if(this.chaosMode == true){
      this.vel.x = Math.random()*24 - 12;
      this.vel.y = Math.random() * 24 - 12;
    }
  }
}
