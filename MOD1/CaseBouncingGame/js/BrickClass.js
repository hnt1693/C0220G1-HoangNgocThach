let brickRowCount = 3;
let brickColumnCount = 6;
let brickWidth = 60;
let brickHeight = 20;
let brickPadding = (400 - brickWidth * brickColumnCount) / 7;
let brickOffsetTop = 30;
let brickOffsetLeft = (400 - brickWidth * brickColumnCount) / 7;

class Brick {
    constructor() {
        this.createBrick = function () {
            let r;
            let c;
            this.brick = [];
            this.count = 0;
            for (c = 0; c < brickColumnCount; c++) {
                this.brick[c] = [];
                for (r = 0; r < brickRowCount; r++) {
                    this.brick[c][r] = {x: 0, y: 0};
                    let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                    let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                    this.brick[c][r].x = brickX;
                    this.brick[c][r].y = brickY;
                    this.brick[c][r].value = randomValue(GAME_LEVEL);
                    this.brick[c][r].width = brickWidth;
                    this.brick[c][r].height = brickHeight;
                    this.count += 1;
                }
            }
        }
        this.draw = function () {
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    if (this.brick[c][r].value >= 1) {
                        ctx.drawImage(getImageBrick(this.brick[c][r].value), this.brick[c][r].x, this.brick[c][r].y, brickWidth, brickHeight);

                    } else {
                        this.brick[c][r] = 0;
                    }
                }
            }
        }


    }

}
