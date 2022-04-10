class Triangle{
  constructor (x, y, dx, dy, radius, color){
    this.loc = new JSVector(x,y); //new creates a new instance
    //have a vector that already has an x and y
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,0);
    //have a vector that has velocity (use magnitude and direction)
    //vector has magnitude and direction and so does velocity and acceleration
    //so velocity can be represented as a vector (and so can acceleration)
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
    this.velLimit = 4;
  }
  run(){
    this.update();
    this.draw();
    this.draw2();
    //this.checkEdges();
  }

  getCanvasLocation(x, y){
    this.canvasLoc = new JSVector(x,y);
  }

/*
  getLocX(){
    return this.loc.x;
  }

  getLocY(){
    return this.loc.y;
  }

  setLocX(x){
    this.loc.x = x;
  }

  setLocY(y){
    this.loc.y = y;
  }
*/
  update(){
    this.acc = JSVector.subGetNew(target.loc,this.loc);
    this.acc.normalize();
    this.acc.multiply(.1);
    this.vel.add(this.acc);
    this.vel.limit(this.velLimit);
    this.loc.add(this.vel);
    this.velLimit = 4;
    //this.loc.add(this.canvasLoc);
  }
  draw(){
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection()+Math.PI);
    context.beginPath();    // clear old path
    context.moveTo(this.radius, this.radius);
    context.lineTo(-this.radius,this.radius/2);
    context.lineTo(this.radius,this.radius/2);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();

    context.restore();
  }
  draw2(){
    context2.save();
    context2.translate(this.loc.x, this.loc.y);
    context2.rotate(this.vel.getDirection()+Math.PI);
    context2.beginPath();    // clear old path
    context2.moveTo(this.radius, this.radius);
    context2.lineTo(-this.radius,this.radius/2);
    context2.lineTo(this.radius,this.radius/2);
    context2.strokeStyle = "black";  // color to fill
    context2.fillStyle = this.color;     // color to stroke
    context2.fill();     // render the fill
    context2.stroke();
    context2.restore();
  }
}
