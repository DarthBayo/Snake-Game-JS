export default class Score {
    constructor()
    {
        // Score variables
        this.score = 0;
    }

    incrementScores(pElement)
    {
        this.score += 1;
        pElement = `Scores: ${this.score}`;
    }
} 
