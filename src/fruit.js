export default class Food {
    // Setting food respawn
    constructor(pPixel) {
        this.food = {
            x: 0,
            y: 0
        };

        this.pixel = pPixel;
    }

    // Spawn a new fruit
    fruitSpawn()
    {
        this.food.x = Math.floor(Math.random() * 20 + 1) * this.pixel;
        this.food.y = Math.floor(Math.random() * 30 + 1) * this.pixel;

        if (this.food.x > 256 || this.food.y >= 256)
        {
            this.food.x = Math.floor(Math.random() * 20 + 1) * this.pixel;
            this.food.y = Math.floor(Math.random() * 30 + 1) * this.pixel;
        }
    };

}
