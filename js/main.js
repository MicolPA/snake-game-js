import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoad = document.getElementById('gameBoard')

function main(currentTime){

    if(gameOver){
        if(confirm('You are a failure')){
            window.location = '/';
        }
        return
    }

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime;
    
    update();
    draw();
    
}


window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood(gameBoad);
    checkDeath(gameBoad)
}

function draw(){
    gameBoad.innerHTML = '';
    drawSnake(gameBoad);
    drawFood(gameBoad);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}