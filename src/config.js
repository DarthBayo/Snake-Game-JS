/*
    Pixel     => 8 | The small part of board
    Perimeter => 8 | the
    256 is the board dimension, with the square with 8x8 of area
*/

export default class Config {
    constructor()
    {
        // Settings pixel 
        this.pixel = 8; // > 8

        // Settings canvas size
        this.perimeter = {
            x: this.pixel * 32, // > 256 
            y: this.pixel * 32  // > 256
        };

        // Background Image
        this.background = new Image();

        // Snake-Head Image
        this.snakeHead = new Image();

        // Fruit Image
        this.fruit = new Image();
    }

    imgBackground(pUrl)
    {
        this.background.src = pUrl;
    }

    imgSnakeHead(pUrl)
    {
        this.imgSnakeHead.src = pUrl;
    }

    imgFruit(pUrl)
    {
        this.fruit.src = pUrl;
    }

    getPixel()
    {
        return this.pixel;
    }

    perimeterX()
    {
        return this.perimeter.x;
    }

    perimeterY()
    {
        return this.perimeter.y;
    }
}
