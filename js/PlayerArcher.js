class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      //Add code to move the bow up and down given in hint 2
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  