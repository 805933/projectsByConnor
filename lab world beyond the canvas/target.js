//How would I get the x and y of one vector to use in another?

class Target{
  constructor (x, y, radius, color){
    this.loc = new JSVector(x,y); //new creates a new instance
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.update();
    this.draw();
  }
  update(){
    this.loc.getDirection();
    if (this.loc.distance(triangle.loc)<100){
      this.loc = new JSVector(Math.random()*bounds.width-bounds.width/2,Math.random()*bounds.height-bounds.height/2);
    }

    /*
    If the distance is less than 100, find a new location.
    */

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
    //context2.scale(0.1,0.1);
    //context2.translate(bounds.width/2,bounds.height/2);
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context2.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context2.strokeStyle = "black";  // color to fill
    context2.fillStyle = this.color;     // color to stroke
    context2.fill();     // render the fill
    context2.stroke();
  }
}
