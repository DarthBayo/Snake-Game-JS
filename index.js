import Config from "./src/config.js";
import Snake from "./src/snake.js";
import Food from "./src/fruit.js";
import Logs from "./src/logs.js";

document.addEventListener("DOMContentLoaded", () => {
    const config = new Config();
    const snake  = new Snake(config.perimeterX(), config.perimeterY());
    const food   = new Food(config.getPixel());
    const logs   = new Logs();

    // Clean IMG tag
    document.getElementById("back").remove();

    // Getting canvas
    let board = document.getElementById("game");
    let game  = board.getContext("2d");

    // Draw every 0.1 s
    function draw()
    {
        // Snake Move
        snake.snakeMove();

        // Drawing img
        game.drawImage(config.background, 0, 0);
        
        // Drawing Snake
        snake.snake.body.forEach( pos => {
            game.fillStyle = "#1b1f22";
            game.fillRect(pos.x, pos.y, block, block);
        });

        // Drawing Fruit
        game.drawImage(food.fruit, food.x, food.y);

        game.drawImage(snakeHead, snake.x, snake.y);

        // Eating and Fruit new Respawn
        if ( snake.x == food.x && snake.y == food.y )
        {
            food.fruitSpawn();
            config.incrementScores();
            snake.newBody();
        }

        logs.returnLogs(snake.getBodyLength());
    }

    // Reload everyday 0.1 s
    setInterval(draw, 50);
});
