export default class Snake {
    constructor(pBoardX, pBoardY)
    {
        // Setting snake size and drawing on canvas
        this.snake = {
            x: pBoardX / 2,
            y: pBoardY / 2,
            direction: 0, // ASCII values,
            body: [
                // { 
                //    x: posX,
                //   y: posY 
                // }
            ]
        };
    }

    getBodyLength()
    {
        return this.snake.body.length;
    }

    // New Part of the body
    newBody(pLogsFoodX, pLogsFoodY)
    {
        this.snake.body.push({
            x: pLogsFoodX,
            y: pLogsFoodY
        });
    }

    // Get the value to move snake
    moveKeys()
    {
        document.addEventListener("keydown", event => {
            // LEFT
            if ( (event.key == "ArrowLeft" || event.key.toLowerCase() == "a" || event.key.toLowerCase() == "h") && this.snake.direction != 68 )
            {
                this.snake.direction = 65;
            }
            // UP
            else if ( (event.key == "ArrowUp" || event.key.toLowerCase() == "w" || event.key.toLowerCase() == "k") && this.snake.direction != 83 )
            {
                this.snake.direction = 87;
            }
            // DOWN
            else if ( (event.key == "ArrowDown" || event.key.toLowerCase() == "s" || event.key.toLowerCase() == "j") && this.snake.direction != 87 )
            {
                this.snake.direction = 83;
            }
            // RIGHT
            else if ( (event.key == "ArrowRight" || event.key.toLowerCase() == "d" || event.key.toLowerCase() == "l") && this.snake.direction != 65 )
            {
                this.snake.direction = 68;
            }
        });

        document.getElementsByName("button").addEventListener("click", event => {
            // LEFT button
            if ( event.target.value == String(65) && this.snake.direction != 68 )
            {
                this.snake.direction = 65;
            }
            // UP button
            else if ( event.target.value == String(87) && this.snake.direction != 83 )
            {
                this.snake.direction = 87;
            }
            // DOWN button
            else if ( event.target.value == String(83) && this.snake.direction != 87 )
            {
                this.snake.direction = 83;
            }
            // RIGHT button
            else if ( event.target.value == String(68) && this.snake.direction != 65 )
            {
                this.snake.direction = 68;
            }
        });
    }

    // Change the snake position
    snakeMove()
    {
        try {
            // Body Directions
            for (let i=this.snake.body.length-1; i>=0; i--)
            {
                if ( i == 0 )
                {
                    this.snake.body[i].x = this.snake.x;
                    this.snake.body[i].y = this.snake.y;
                }
                else
                {
                    this.snake.body[i].x = this.snake.body[i-1].x;
                    this.snake.body[i].y = this.snake.body[i-1].y;
                }
            }
        }
        finally {
            // Head Directions
            // Left
            if ( this.snake.direction == 65 ) this.snake.x -= block;
            // Up
            if ( this.snake.direction == 87 ) this.snake.y -= block;
            // Down
            if ( this.snake.direction == 83 ) this.snake.y += block;
            // Right
            if ( this.snake.direction == 68 ) this.snake.x += block;
            // Restarting the positions
            if ( this.snake.x == gametable.x ) this.snake.x = 0;
            if ( this.snake.x < 0 ) this.snake.x = gametable.x;
            if ( this.snake.y == gametable.y ) this.snake.y = 0;
            if ( this.snake.y < 0 ) this.snake.y = gametable.y;
        }
    }
}
