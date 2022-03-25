export default class Bullet{
    constructor(x,y, speed, damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 10;
        this.height = 10;
        this.color = "black";
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.fillRect(this.x, this.y+50, this.width, this.height);
    }
    //Hitbox
    collideWith(sprite){
       if
       (
        this.x < sprite.x + sprite.width &&
        this.x + this.width > sprite.x &&
        this.y < sprite.y + sprite.height &&
        this.y + this.height > sprite.y
        ) {
            sprite.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}