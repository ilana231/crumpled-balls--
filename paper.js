class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
       
      }
      this.body = Bodies.circle(x, y, 50, options);
      //this.width = 50;
      //this.height = 50;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
      
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
  };