export default class Logs {
    constructor()
    {
        // Settings Logs Fruit and snake
        this.logs = {
            snakeX: 0,
            snakeY: 0,
            foodX: 0,
            foodY: 0
        };
    }

    // Snake and Food console
    returnLogs(pSnakeX, pSnakeY, pSnakeLenght, pFoodX, pFoodY)
    {
        if (this.logs.snakeX != snake.x || 
            this.logs.snakeY != snake.y || 
            this.logs.foodX != food.x ||
            this.logs.foodY != food.y
        )
        {
            console.clear();
            console.log(`Snake.X: ${snake.x}`);
            console.log(`Snake.Y: ${snake.y}`);
            console.log(`Food.X: ${food.x}`);
            console.log(`Food.Y: ${food.y}`);
            console.log(`Snake body: ${snake.body.length}`);
            
            // Settings again
            this.logs.snakeX = snake.x;
            this.logs.snakeY = snake.y
            this.logs.foodX = food.x;
            this.logs.foodY = food.y;
        }
    }
}
