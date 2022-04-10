class SpecialBall{
  constructor (x, y, dx, dy, radius, color){
    this.loc = new JSVector(x,y); //new creates a new instance
    this.vel = new JSVector(dx,dy);
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  update(){
    this.loc.add(this.vel);
    this.checkEdges();
    }
  draw(){
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();
  }
  draw2(){
    context2.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context2.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context2.strokeStyle = "black";  // color to fill
    context2.fillStyle = this.color;     // color to stroke
    context2.fill();     // render the fill
    context2.stroke();
  }
  checkEdges(){
      if(this.loc.x < -1000 || this.loc.x >1000){ //instance variable to canvas height
        this.vel.x *= -1
      }
      if(this.loc.y<-1000 || this.loc.y>1000){
        this.vel.y *= -1
      }
  }
}
