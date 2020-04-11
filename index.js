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
            food.x = Math.floor((Math.random() * 10) * block);
            food.y = Math.floor((Math.random() * 10) * block);

            // Settings Logs Fruit and snake
            let logs = {
                snakeX: 0,
                snakeY: 0,
                foodX: 0,
                foodY: 0
            };

            document.addEventListener("keydown", event => {
                if ( (event.key == "a" || event.key == "ArrowLeft") && snake.x != 0)
                {
                    snake.x -= block;
                }
                else if ( (event.key == "w" || event.key == "ArrowUp") && snake.y != 0)
                {
                    snake.y -= block;
                }
                else if ( (event.key == "s" || event.key == "ArrowDown") && snake.y < (gametable.y - block))
                {
                    snake.y += block;
                }
                else if ( (event.key == "d" || event.key == "ArrowRight") && snake.x < (gametable.x - block))
                {
                    snake.x += block;
                }
            });

            function draw()
            {
                // Drawing img
                game.drawImage(background, 0, 0);
                game.drawImage(snakeHead, snake.x, snake.y);
                game.drawImage(fruit, food.x, food.y);

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

            setInterval(draw, 100);
        });
    }
)()
