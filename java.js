import Player from "./Player.js";
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 600;

//Bulletcontroller for player and bulletcontroller1 for enemy
const bulletController = new BulletController(canvas);
const bulletController1 = new BulletController(canvas);

const player = new Player(
    canvas.width / 2.2,
    canvas.height / 1.3,
    bulletController);
//Enemies 
const enemies = [
    new Enemy(0, 50, Math.floor(Math.random() * 11) + 5, bulletController1),
    new Enemy(180, 50, Math.floor(Math.random() * 11) + 5, bulletController1),
    new Enemy(360, 50, Math.floor(Math.random() * 11) + 5, bulletController1),
    new Enemy(100, 170, Math.floor(Math.random() * 8) + 5, bulletController1),
    new Enemy(280, 170, Math.floor(Math.random() * 8) + 5, bulletController1),
]

function gameLoop() {
    //canvas
    setCommonStyle();
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    bulletController.draw(ctx);
    bulletController1.draw(ctx)
    //enemies colision with bullet
    enemies.forEach((enemy) => {
        if (bulletController.collideWith(enemy)) {
            if (enemy.health < 1) {
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1)
            }
        } else {
            enemy.draw(ctx);
        }
    });
    //player collision with bullet
    if ((bulletController1.collideWith(player))) {
        if (player.health <= 0) {
            window.location.href = "defeat.html" 
        }
    }else if(player.health > 0){
        player.draw(ctx);
    }
    //check for victory
    if (enemies.length < 1){
        window.location.href = "victory.html" 
    }
}

function setCommonStyle() {
}
setInterval(gameLoop, 1000 / 60);