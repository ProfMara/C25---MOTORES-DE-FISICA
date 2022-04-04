class Solo {
    constructor(){
        var parado = {isStatic:true};
        this.body = Bodies.rectangle(400,590,800,20,parado);
        World.add(world, this.body);
    }
    show(){
        var pos = this.body.position;
        fill("green")
        push();
        rectMode(CENTER)
        rect(pos.x, pos.y, 800,20);
        pop();
    }
}