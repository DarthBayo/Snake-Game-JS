(
    () => {
        document.addEventListener("DOMContentLoaded", () => {
            // Clean IMG tag
            document.getElementById("back").remove();

            // Getting canvas
            let board = document.getElementById("game");
            let game  = board.getContext("2d");

            // Settings pixels and box size
            const pixel = 4; 
            const block = pixel*2;

            // Settings canvas size
            const gametable = {x: pixel*64, y: pixel*64};
            board.setAttribute("width", gametable.x.toString());
            board.setAttribute("height", gametable.y.toString());

            // Background Image
            let background = new Image();
            background.src = "img/background.png";

            // Snake-Head Imagew
            let snakeHead = new Image();
            snakeHead.src = "img/snake-head-right.png";

            // Fruit Image
            let fruit = new Image();
            fruit.src = "img/fruit.png";

            // Setting snake size and drawing on canvas
            let snake = {x: gametable.x/2, y: gametable.y/2};

            // Setting food respawn
            let food = {x: 0, y: 0};
            food.x = Math.floor(Math.random() * 17 + 1) * block;
            food.y = Math.floor(Math.random() * 15 + 1) * block;

            // Settings Logs Fruit and snake
            let logs = {
                snakeX: 0,
                snakeY: 0,
                foodX: 0,
                foodY: 0
            };

            // Move the snake
            document.addEventListener("keydown", event => {
                if ( snake.x != 0 && (event.key == "a" || event.key == "ArrowLeft") )
                {
                    snake.x -= block;
                }
                else if ( snake.y != 0 && (event.key == "w" || event.key == "ArrowUp") )
                {
                    snake.y -= block;
                }
                else if ( snake.y < (gametable.y - block) && (event.key == "s" || event.key == "ArrowDown") )
                {
                    snake.y += block;
                }
                else if ( snake.x < (gametable.x - block) && (event.key == "d" || event.key == "ArrowRight") )
                {
                    snake.x += block;
                }
            });

            // Draw every 0.1 s
            function draw()
            {
                // Drawing img
                game.drawImage(background, 0, 0);
                game.drawImage(snakeHead, snake.x, snake.y);
                game.drawImage(fruit, food.x, food.y);

                // Eating and Fruit new Respawn
                if ( snake.x == food.x && snake.y == food.y )
                {
                    food.x = Math.floor(64 / (Math.random() * 10)) * block;
                    food.y = Math.floor((Math.random() * 10)) * block;
                }

                if (food.x > 256 || food.y >= 256)
                {
                    food.x = Math.floor(64 / (Math.random() * 10)) * block;
                    food.y = Math.floor((Math.random() * 10)) * block;
                }

                // Snake and Food console
                if (logs.snakeX != snake.x || 
                    logs.snakeY != snake.y || 
                    logs.foodX != food.x ||
                    logs.foodY != food.y
                )
                {
                    console.log(`Snake.X: ${snake.x} || Snake.Y: ${snake.y}`);
                    console.log(`Food.X: ${food.x} || Food.Y: ${food.y}`);
                    
                    // Settings again
                    logs.snakeX = snake.x;
                    logs.snakeY = snake.y
                    logs.foodX = food.x;
                    logs.foodY = food.y;
                }
            }

            // Reload everyday 0.1 s
            setInterval(draw, 100);
        });
    }
)()
