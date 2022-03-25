const playership  = document.createElement("img");
    playership.src = "playership.png";

export default class Player{
    constructor(x, y, bulletController,) {
        this.x = x; 
        this.y = y;
        this.bulletController = bulletController;
        this.health = 5;
        this.width  = 50;
        this.height = 50;
        this.speed = 1.5;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);

    } 

    draw(ctx){
        this.move();
        ctx.drawImage(playership, this.x+-60, this.y+20)
        this.shoot();
        //SHOW HP
        ctx.fillStyle ="black"
        ctx.font ="25px Arial"
        ctx.fillText(
            this.health, 
            this.x+20, 
            this.y+120);
    }

    shoot(){
        if(this.shootPressed){
            const speed = 2.5;
            const delay2 = 40;
            const damage = 1;
            const bulletX = this.x + this.width/2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay2);
        }
    }
    
    move(){
        if(this.leftPressed){
            this.x -= this.speed;
        }
        if(this.rightPressed){
            this.x += this.speed;
        }
    }

    keydown =(e)=>{
        if(e.code === "ArrowLeft"){
            this.leftPressed = true;
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = true;
        }
        if(e.code === "Space"){
            this.shootPressed = true;
        }
    }
    keyup =(e)=>{
        if(e.code === "ArrowLeft"){
            this.leftPressed = false;
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = false;
        }
        if(e.code === "Space"){
            this.shootPressed = false;
        }
    }
    takeDamage(damage){
        this.health -= damage
    }
}
