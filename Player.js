const playership  = document.createElement("img");
    playership.src = "playership.png";
/*export player properties and establish variables*/
export default class Player{
    constructor(x, y, bulletController,) {
        this.x = x; 
        this.y = y;
        this.bulletController = bulletController;
        this.health = 5;
        this.width  = 50;
        this.height = 50;
        this.speed = 1.5;
        /*establish keydown and keyup properties for user controll over player*/
        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);

    } 
    /*draws out player, including image and health*/ 
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
    /*properties that allow the player to shoot*/
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
    /*if statments to allow the player to move*/
    move(){
        if(this.leftPressed){
            this.x -= this.speed;
        }
        if(this.rightPressed){
            this.x += this.speed;
        }
    }

    /*if statments to controll if keys are pressed*/
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
    /*if statments to controll if keys are not pressed*/
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
    /*properties for player to take damage*/
    takeDamage(damage){
        this.health -= damage
    }
}
