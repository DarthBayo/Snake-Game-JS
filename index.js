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

            // Snake-Head Image
            let snakeHead = new Image();
            snakeHead.src = "img/snake-head-left.png";

            // Fruit Image
            let fruit = new Image();
            fruit.src = "img/fruit.png";

            // Setting snake size and drawing on canvas
            let snake = {x: gametable.x/2, y: gametable.y/2};
            let food = {x: 0, y: 0};

            document.addEventListener("keypress", event => {
                if ( event.key == "a" && snake.x != 0)
                {
                    snake.x -= block;
                }
                else if ( event.key == "w" && snake.y != 0)
                {
                    snake.y -= block;
                }
                else if ( event.key == "s" && snake.y < (gametable.y - block))
                {
                    snake.y += block;
                }
                else if ( event.key == "d" && snake.x < (gametable.x - block))
                {
                    snake.x += block;
                }
            });

            food.x = Math.floor(Math.random() * gametable.x);
            food.y = Math.floor(Math.random() * gametable.y);

            function draw()
            {
                // Drawing img
                game.drawImage(background, 0, 0);
                game.drawImage(snakeHead, snake.x, snake.y);
                game.drawImage(fruit, food.x, food.y);
                // Snake console
                console.log(`X: ${snake.x} || Y: ${snake.y}`);
            }

            setInterval(draw, 100);
        });
    }
)()
