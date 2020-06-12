const GAME_STATUS_PLAYING = 1;
const GAME_STATUS_OVER = 2;

class Game {
    constructor() {
        this.status = GAME_STATUS_PLAYING;
        this.player = new Car();
        this.rocks = [
            new Rock(1, 10, 12),
            new Rock(2, 10, 12),
            new Rock(1.2, 10, 12),
            new Rock(3, 10, 12),
            new Rock(1.5, 10, 12),
            new Rock(3, 10, 12),
            new Rock(4, 10, 12),
        ];

        this.update = function () {
            if (this.status === GAME_STATUS_PLAYING) {
                this.player.update();
                this.rocks.forEach((rock) => rock.update());
            }
        };
        this.check = function () {
            if (this.status === GAME_STATUS_PLAYING) {
                let isIntersect = this.rocks.any((rock) => checkCollision(rock, this.player));
                if (isIntersect === true) {
                    this.status = GAME_STATUS_OVER;
                }
            }

        };
        this.draw = function (context) {
            context.clearRect(0, 0, 350, 700);
            this.player.draw(context);
            this.rocks.forEach((rock) => rock.draw(context));
        };

        this.onKeyDown = function (keyCode) {
            switch (keyCode) {
                case 37:
                    this.player.direction = CAR_DIRECTION_LEFT;
                    break;
                case 39:
                    this.player.direction = CAR_DIRECTION_RIGHT;
                    break;
            }
        };

        this.onKeyUp = function (keyCode) {
            this.player.direction = CAR_DIRECTION_IDLE;
        };
    }
}

function checkCollision(r1, r2) {
    let leftX = Math.max(r1.x, r2.x);
    let rightX = Math.min(r1.x + r1.width, r2.x + r2.width);
    let topY = Math.max(r1.y, r2.y);
    let bottomY = Math.min(r1.y + r1.height, r2.y + r2.height);

    return (leftX < rightX && topY < bottomY);
}


const CAR_DIRECTION_LEFT = 1;
const CAR_DIRECTION_RIGHT = 2;
const CAR_DIRECTION_IDLE = 0;

class Car {
    constructor() {
        this.x = 100;
        this.y = 600;
        this.width = 20;
        this.height = 40;
        this.direction = CAR_DIRECTION_IDLE;
    }

    update = function () {
        if (this.direction === CAR_DIRECTION_LEFT) {
            if (this.x >= 0) {
                this.x -= 2;
            }
        } else if (this.direction === CAR_DIRECTION_RIGHT) {
            if (this.x <= (350 - this.width)) {
                this.x += 2;
            }
        }
    }
    draw = function (context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
    }

}

class Rock {
    constructor(speed, width, height) {
        this.width = width;
        this.x = Math.random() * (350-this.width);
        this.y = -height;

        this.height = height;
        this.speed = speed;
    }

    update = function () {
        if (this.y < 760) {
            this.y += this.speed;
        } else {
            this.y = -this.height;
            this.speed *= 1.01;
            this.x = Math.random() * (350-this.width);
        }
    }

    draw = function (context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
    };
}

Array.prototype.any = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            return true;
        }
    }
    return false;
}
