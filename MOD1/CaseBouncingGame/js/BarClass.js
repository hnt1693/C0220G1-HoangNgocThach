const DIRECTION_LEFT = 1;
const DIRECTION_RIGHT = 2;
const DIRECTION_IDE = 0;

class Bar {
    constructor(x, y, width, height) {
        this.statusCollistion = false;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isMoving = false;
        this.direction = DIRECTION_IDE;
        this.speed = 4;
        this.moveLeft = function () {
            this.direction = DIRECTION_LEFT;
            this.isMoving = true;
        }
        this.moveRight = function () {
            this.isMoving = true;
            this.direction = DIRECTION_RIGHT;
        }
        this.stop = function () {
            this.isMoving = false;
        }
        this.update = function () {
            if (this.isMoving === true) {
                if (this.direction === DIRECTION_LEFT) {
                    if (this.x >= this.speed) {
                        this.x -= this.speed;
                    }

                } else {
                    if (this.x <= 400 - this.width - this.speed) {
                        this.x += this.speed;

                    }

                }
            } else {
                this.direction = DIRECTION_IDE;
            }
        }
        this.draw = function () {
            ctx.drawImage(game.pictureManager.bar, this.x, this.y, this.width, this.height);

        }
    }


}

