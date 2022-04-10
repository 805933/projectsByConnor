class Head{
  constructor(x, y, dx, dy, size){
    this.loc = new JSVector(x,y); //new creates a new instance
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,0);
    this.size = size;
    //this.previousLoc = new JSVector(this.loc.x,this.loc.y);
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.update();
    this.draw();
  }

  update(){
    this.loc.add(this.vel);
      if(this.loc.x < -1000 || this.loc.x >1000){
        this.vel.x *= -1
      }
      if(this.loc.y<-1000 || this.loc.y>1000){
        this.vel.y *= -1
      }
      //this.previousLoc.x -= 20;
    }
  draw(){
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "red";     // color to stroke
    context.fill();     // render the fill
    context.stroke();
  }
  draw2(){
    context2.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context2.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    context2.strokeStyle = "black";  // color to fill
    context2.fillStyle = "red";     // color to stroke
    context2.fill();     // render the fill
    context2.stroke();
  }
}
