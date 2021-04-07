class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0.10,
          friction:55,
          density:999999,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbin.png");
      World.add(world, this.body);
    }
    display(){
      
      imageMode(CENTER);
      fill("white");
      image(this.image,this.body.position,33,33);
      
    }
  };  