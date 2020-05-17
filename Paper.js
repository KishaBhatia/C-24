class Paper{

    constructor(x,y){

        var options={

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

    this.body=Bodies.circle(x,y,18,options);
    this.x=x;
    this.y=y;

    World.add(world, this.body);
    }


    display(){

        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(0, 0,40,40);
        pop();
      
    }
    
}
