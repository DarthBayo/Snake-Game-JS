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

            // Score variables
            let score = 0;
            let highScore = 0;
            function incrementScores()
            {
                score += 1;

                if ( highScore <= score )
                {
                    highScore = score;
                }

                document.getElementById("score").textContent = "Score: " + score;
                document.getElementById("high").textContent = "HighScore: " + highScore;
            }
            document.getElementById("scoreBoard").style.alignItems = "center";
            document.getElementById("scoreBoard").style.alignSelf = "center";
            document.getElementById("scoreBoard").style.textAlign = "center";
            document.getElementById("scoreBoard").style.fontFamily = "arial";
            document.getElementById("scoreBoard").style.fontSize = "18px";

            // Settings canvas size
            const gametable = {x: pixel*64, y: pixel*64};
            board.setAttribute("width", gametable.x.toString());
            board.setAttribute("height", gametable.y.toString());

            // Background Image
            let background = new Image();
            background.src = "img/background.png";

            // Snake-Head Imagew
            let snakeHead = new Image();
            snakeHead.src = "img/snake-head-left.png";

            // Fruit Image
            let fruit = new Image();
            fruit.src = "img/fruit.png";

            // Setting snake size and drawing on canvas
            let snake = {x: gametable.x/2, y: gametable.y/2, size: 0};

            // Setting food respawn
            let food = {x: 0, y: 0};
            function fruitSpawn()
            {
                food.x = Math.floor(Math.random() * 20 + 1) * block;
                food.y = Math.floor(Math.random() * 30 + 1) * block;

                if (food.x > 256 || food.y >= 256)
                {
                    food.x = Math.floor(Math.random() * 20 + 1) * block;
                    food.y = Math.floor(Math.random() * 30 + 1) * block;
                }
            };
            fruitSpawn();

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
                game.drawImage(fruit, food.x, food.y);
                game.drawImage(snakeHead, snake.x, snake.y);

                // Eating and Fruit new Respawn
                if ( snake.x == food.x && snake.y == food.y )
                {
                    fruitSpawn();
                    incrementScores();
                }

                // Snake and Food console
                if (logs.snakeX != snake.x || 
                    logs.snakeY != snake.y || 
                    logs.foodX != food.x ||
                    logs.foodY != food.y
                )
                {
                    console.clear();
                    console.log(`Snake.X: ${snake.x}`);
                    console.log(`Snake.Y: ${snake.y}`);
                    console.log(`Food.X: ${food.x}`);
                    console.log(`Food.Y: ${food.y}`);
                    
                    // Settings again
                    logs.snakeX = snake.x;
                    logs.snakeY = snake.y
                    logs.foodX = food.x;
                    logs.foodY = food.y;
                }
            }

            // Reload everyday 0.1 s
            setInterval(draw, 30);
        });
    }
)()
