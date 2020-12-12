class Dustbin{
constructor(x,y,width,height){
var options ={
isStatic:true
}

this.width = width;
this.height = height;
this.Bottombody = Bodies.rectangle(x,y,width,height,options);
this.Leftbody = Bodies.rectangle(x-75,y-30,15,150,options);
this.Rightbody = Bodies.rectangle(x+75,y-30,15,150,options);
World.add(world,this.Bottombody);
World.add(world,this.Leftbody);
World.add(world,this.Rightbody);
}
display(){
var posBottom = this.Bottombody.position;
var posLeft = this.Leftbody.position;
var posRight = this.Rightbody.position;
push()
translate (posLeft.x,posLeft.y);
rectMode(CENTER)
//strokeWeight(4);
fill (255)
stroke (255)
rect(0,0,15,100)
pop ()
push ()
translate (posRight.x,posRight.y);
rectMode(CENTER)
//strokeWeight(4);
fill (255)
stroke (255)
rect(0,0,15,100)
pop ()
push ()
translate (posBottom.x,posBottom.y);
rectMode(CENTER)
//strokeWeight(4);
fill (255)
stroke (255)
rect(0,0,150,20)
pop ()

}
}

