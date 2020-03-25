class SoundManager {
    constructor() {
        this.bouncingSound = new Audio('sound/Bounc.mp3');
        this.backGroundSound = new Audio('sound/Background.mp3');
        this.nextLevel = new Audio('sound/nextLevel.mp3');
        this.endGame = new Audio('sound/endGame.mp3')
        this.playEndGame = function () {
            this.endGame.volume = 0.5;
            this.endGame.play();
        }
        this.playNextLevel = function () {
            this.nextLevel.volume = 0.5;
            this.nextLevel.play();
        }
        this.playBouncingSound = function () {
            this.bouncingSound.volume = 0.5;
            this.bouncingSound.play();
        }
        this.playBackground = function () {
            this.backGroundSound.volume = 0.3;
            this.backGroundSound.play();
            this.backGroundSound.loop = true;
        }
        this.disableSound = function () {
            this.backGroundSound.pause();
        }
    }
}
