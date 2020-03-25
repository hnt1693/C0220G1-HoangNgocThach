const DIRECTION_LEFT = 1;
const DIRECTION_RIGHT = 2;
const DIRECTION_IDE = 0;

class Plane {
    constructor(x, y, speed) {
        this.direction = DIRECTION_IDE;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.isMoving = false;
        this.moveLeft = function () {
            this.direction = DIRECTION_LEFT;
            this.isMoving = true;
        }
        this.moveRight = function () {
            this.direction = DIRECTION_RIGHT;
            this.isMoving = true;
        }
        this.update = function () {
            if (this.isMoving === true) {
                if (this.direction === DIRECTION_RIGHT) {
                    this.x += this.speed;
                } else if (this.direction === DIRECTION_LEFT) {
                    this.x -= this.speed;
                }
            }
        }
        this.stop = function () {
            this.isMoving = false;
        }
        this.draw = function () {
            ctx.beginPath();
            ctx.drawImage(game.imageManager.planeImg, this.x, this.y, 100, 100);

        }
    }
}
