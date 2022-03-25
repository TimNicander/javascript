const enemyship  = document.createElement("img");
    enemyship.src = "enemyship.png";

export default class Enemy{
    constructor(x, y, health, bulletController){
        this.x = x;
        this.y = y;
        this.health = health;
        this.bulletController =  bulletController;
        this.width = 150;
        this.height = 10;
        this.speed = -1.5;
    
            document.addEventListener("keydown", this.keydown);
            document.addEventListener("keyup", this.keyup);
        
    }

    draw(ctx){
      
        ctx.drawImage(enemyship, this.x, this.y)
        this.shoot();

        //SHOW HP
        ctx.fillStyle ="black"
        ctx.font ="25px Arial"
        ctx.fillText(
            this.health, 
            this.x+90, 
            this.y);
    }

    shoot(){
        if(this.shootPressed){
            const speed = -2.5;
            const delay = 40;
            const damage = 1;
            const bulletX = this.x + this.width/2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }
    keydown =(e)=>{

    if(e.code === "Space"){
        this.shootPressed = true;
    }}
    keyup =(e)=>{
    if(e.code === "Space"){
    this.shootPressed = false;
    }}
        //count damage
    takeDamage(damage){
        this.health -= damage
    }
}