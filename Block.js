class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visibility = 150;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        // var angle = this.body.angle;
        // var pos= this.body.position;
        console.log(this.body.speed);
        if(this.body.speed<3){
          var angle =this.body.angle;
          var position = this.body.position;
          push();
        translate(position.x, position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }else{
          World.remove(world,this.body);
          // tint(255,this.visibility);
          // image(this.image,this.body.position.x,this.body.position.y,50);
          push();
          this.visibility = this.visibility;
          pop();
        }
        
      }
}