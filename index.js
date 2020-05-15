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
            function incrementScores()
            {
                score += 1;
                document.getElementById("score").textContent = "Score: " + score;
            }

            // Settings canvas size
            const gametable = {x: pixel*64, y: pixel*64};
            board.setAttribute("width", gametable.x.toString());
            board.setAttribute("height", gametable.y.toString());

            // Background Image
            let background = new Image();
            background.src = "./img/background.png";

            // Snake-Head Imagew
            let snakeHead = new Image();
            snakeHead.src = "./img/snake-head.png";

            // Fruit Image
            let fruit = new Image();
            fruit.src = "./img/fruit.png";

            // Setting snake size and drawing on canvas
            let snake = {
                x: gametable.x/2,
                y: gametable.y/2,
                direction: 0, // ASCII values,
                body: [
                    // { 
                    //    x: posX,
                    //   y: posY 
                    // }
                 ]
            };
            function newBody()
            {
                snake.body.push({x: logs.foodX, y: logs.foodY});
            }

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
                if ( (event.key.toLowerCase() == "a" || event.key.toLowerCase() == "h" || event.key == "ArrowLeft") && snake.direction != 68 )
                {
                    snake.direction = 65;
                }
                else if ( (event.key.toLowerCase() == "w" || event.key.toLowerCase() == "k" || event.key == "ArrowUp") && snake.direction != 83 )
                {
                    snake.direction = 87;
                }
                else if ( (event.key.toLowerCase() == "s" || event.key.toLowerCase() == "j" || event.key == "ArrowDown") && snake.direction != 87 )
                {
                    snake.direction = 83;
                }
                else if ( (event.key.toLowerCase() == "d" || event.key.toLowerCase() == "l" || event.key == "ArrowRight") && snake.direction != 65 )
                {
                    snake.direction = 68;
                }
            });
            document.querySelector(".left").addEventListener("click", () => {
                if (snake.direction !== 68) { snake.direction = 65; }
            });
            document.querySelector(".up").addEventListener("click", () => {
                if (snake.direction !== 83) { snake.direction = 87; }
            });
            document.querySelector(".down").addEventListener("click", () => {
                if (snake.direction !== 87) { snake.direction = 83; }
            });
            document.querySelector(".right").addEventListener("click", () => {
                if (snake.direction !== 65) { snake.direction = 68; }
            });
            function snakeMove()
            {
                // Body Directions
                for (let i=snake.body.length-1; i>=0; i--)
                {
                    if ( i == 0 )
                    {
                        snake.body[i].x = snake.x;
                        snake.body[i].y = snake.y;
                    }
                    else
                    {
                        snake.body[i].x = snake.body[i-1].x;
                        snake.body[i].y = snake.body[i-1].y;
                    }
                }

                // Head Directions
                // Left
                if ( snake.direction == 65 ) snake.x -= block;
                // Up
                if ( snake.direction == 87 ) snake.y -= block;
                // Down
                if ( snake.direction == 83 ) snake.y += block;
                // Right
                if ( snake.direction == 68 ) snake.x += block;
                // Restarting the positions
                if ( snake.x == gametable.x ) snake.x = 0;
                if ( snake.x < 0 ) snake.x = gametable.x;
                if ( snake.y == gametable.y ) snake.y = 0;
                if ( snake.y < 0 ) snake.y = gametable.y;
            }

            // Draw every 0.1 s
            function draw()
            {
                // Snake Move
                snakeMove();

                // Drawing img
                game.drawImage(background, 0, 0);
                
                // Drawing Snake
                snake.body.forEach( pos => {
                    game.fillStyle = "#1b1f22";
                    game.fillRect(pos.x, pos.y, block, block);
                });

                // Drawing Fruit
                game.drawImage(fruit, food.x, food.y);

                game.drawImage(snakeHead, snake.x, snake.y);

                // Eating and Fruit new Respawn
                if ( snake.x == food.x && snake.y == food.y )
                {
                    fruitSpawn();
                    incrementScores();
                    newBody();
                }

                /*
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
                    console.log(`Snake body: ${snake.body.length}`);
                    
                    // Settings again
                    logs.snakeX = snake.x;
                    logs.snakeY = snake.y
                    logs.foodX = food.x;
                    logs.foodY = food.y;
                }
                */
            }

            // Reload everyday 0.1 s
            setInterval(draw, 50);
        });
    }
)()
