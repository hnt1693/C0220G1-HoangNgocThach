let count = 0;

class Game {
    constructor() {
        this.newgame = function () {
            this.level = 1;
            this.soundManager = new SoundManager();
            this.pictureManager = new Pictures();
            this.bricks = new Brick();
            this.bricks.createBrick();
            this.bar = new Bar(160, 600, 74, 15);
            // this.item = [this.boundaryTop, this.boundaryLeft, this.boundaryRight, this.bar];
            this.ball = new Ball(this.bar.x + this.bar.width / 2, this.bar.y - 5, 60, 7, 5);
            this.score = 0;
            this.status = GAME_START;
        };
        this.level = 1;
        this.soundManager = new SoundManager();
        this.pictureManager = new Pictures();
        this.boundaryLeft = new Boundary(0, 0, -1, 700);
        this.boundaryRight = new Boundary(400, 0, 1, 700);
        this.boundaryTop = new Boundary(0, 0, 400, -1);
        this.boundaryBot = new Boundary(0, 700, 400, 1);
        this.bricks = new Brick();
        this.bricks.createBrick();
        this.bar = new Bar(160, 600, 74, 15);
        // this.item = [this.boundaryTop, this.boundaryLeft, this.boundaryRight, this.bar];
        this.ball = new Ball(this.bar.x + this.bar.width / 2, this.bar.y - 5, 60, 7, 5);
        this.score = 0;
        this.status = GAME_START;
        this.ballstart = function () {
            this.bar.x = 160;
            this.bar.y = 600;
            this.ball.x = this.bar.x + this.bar.width / 2;
            this.ball.y = this.bar.y - this.ball.radius;
        }
        this.nextLevel = function () {
            GAME_LEVEL += 1;
            this.ball.speed += 1;
            this.bricks.createBrick();
            this.ballstart();
            this.draw();


        }

        this.update = function () {
            if (this.status === GAME_START) {
                this.ballstart();
                count = 0;
            }
            if (this.bricks.count === 0) {
                this.status = GAME_NEXTLEVEL;
                this.nextLevel();
                this.soundManager.disableSound();
                if (count === 0) {
                    this.soundManager.playNextLevel();
                    count++;
                }
            }
            if (checkCollision(this.ball, this.boundaryBot)) {
                this.ball.x -= this.ball.Vx;
                this.ball.y -= this.ball.Vy;
                this.status = GAME_END;
                GAME_LEVEL = 1;
                this.soundManager.disableSound();
                this.soundManager.playEndGame();

                this.soundManager.endGame.loop = false;
            } else if (this.status === GAME_PLAYING) {
                this.bar.update();
                this.ball.update();
                this.collision()
            }
            this.collision = function () {
                let game = this;
                let arcXBetweenRect = (this.ball.x > this.bar.x) && ((this.ball.x < this.bar.x + this.bar.width));
                if ((checkCollision(this.ball, this.boundaryLeft)) || (checkCollision(this.ball, this.boundaryRight))) {
                    this.ball.x = this.ball.x - this.ball.Vx;
                    this.ball.y = this.ball.y - this.ball.Vy;
                    this.ball.Vx = -this.ball.Vx;
                    game.soundManager.playBouncingSound();
                } else if (checkCollision(this.ball, this.boundaryTop)) {
                    this.ball.x = this.ball.x - this.ball.Vx;
                    this.ball.y = this.ball.y - this.ball.Vy;
                    this.ball.Vy = -this.ball.Vy;
                    this.bar.statusCollistion = false;
                    game.soundManager.playBouncingSound();
                } else if (((checkCollision(this.ball, this.boundaryLeft)) && (checkCollision(this.ball, this.boundaryTop))) ||
                    (checkCollision(this.ball, this.boundaryRight)) && (checkCollision(this.ball, this.boundaryTop))) {
                    this.ball.x = this.ball.x - this.ball.Vx;
                    this.ball.y -= this.ball.Vy;
                    this.ball.Vx = -this.ball.Vx;
                    this.ball.Vy = -this.ball.Vy;
                    game.soundManager.playBouncingSound();
                } else if (checkCollision(this.ball, this.bar)) {
                    game.soundManager.playBouncingSound();
                    if (this.bar.statusCollistion === false) {
                        if ((arcXBetweenRect)) {
                            this.ball.x -= this.ball.Vx;
                            this.ball.y -= this.ball.Vy;
                            if (this.bar.direction === DIRECTION_LEFT) {
                                if (this.ball.Vx <= 0) {
                                    this.ball.Vx -= 0.5;
                                    if (this.ball.Vx <= -this.ball.speed + 0.5) {
                                        this.ball.Vx = -this.ball.speed + 0.5;
                                    }
                                    this.ball.Vy = -Math.sqrt(this.ball.speed * this.ball.speed - this.ball.Vx * this.ball.Vx);
                                } else if (this.ball.Vx >= 0) {
                                    this.ball.Vx -= 0.5;
                                    if (this.ball.Vx >= this.ball.speed - 0.5) {
                                        this.ball.Vx = this.ball.speed - 0.5;
                                    }
                                    this.ball.Vy = -Math.sqrt(this.ball.speed * this.ball.speed - this.ball.Vx * this.ball.Vx);
                                }
                            } else if (this.bar.direction === DIRECTION_RIGHT) {
                                if (this.ball.Vx <= 0) {
                                    this.ball.Vx += 0.5;
                                    this.ball.Vy = -Math.sqrt(this.ball.speed * this.ball.speed - this.ball.Vx * this.ball.Vx);
                                } else if (this.ball.Vx >= 0) {
                                    this.ball.Vx += 0.5;
                                    if (this.ball.Vx > this.ball.speed - 0.5) {
                                        this.ball.Vx = this.ball.speed - 0.5
                                    }
                                    this.ball.Vy = -Math.sqrt(this.ball.speed * this.ball.speed - this.ball.Vx * this.ball.Vx);
                                }

                            } else {
                                this.ball.Vy = -this.ball.Vy;
                            }
                            // ball không nằm ở between thanh bar
                        } else {
                            this.ball.x = this.ball.x - this.ball.Vx;
                            this.ball.y = this.ball.y - this.ball.Vy;
                            if (this.ball.y > this.bar.y + this.bar.height / 2) {
                                this.ball.x = this.ball.x - this.ball.Vx;
                                this.ball.y = this.ball.y - this.ball.Vy;
                                this.ball.Vx = -this.ball.Vx;
                            } else {
                                this.ball.x = this.ball.x - this.ball.Vx;
                                this.ball.y = this.ball.y - this.ball.Vy;
                                let checkNearLeft = Math.abs(this.ball.x - this.bar.x) < Math.abs(this.ball.x - this.bar.x - this.bar.width);
                                if ((this.ball.Vx > 0) && (checkNearLeft)) {
                                    this.ball.Vx = -this.ball.Vx;
                                    this.ball.Vy = -this.ball.Vy;

                                } else if ((this.ball.Vx < 0) && (checkNearLeft)) {
                                    this.ball.Vy = -this.ball.Vy;

                                } else if ((this.ball.Vx > 0) && (!checkNearLeft)) {
                                    this.ball.Vy = -this.ball.Vy;

                                } else if ((this.ball.Vx < 0) && (!checkNearLeft)) {
                                    this.ball.Vx = -this.ball.Vx;
                                    this.ball.Vy = -this.ball.Vy;
                                }
                            }

                        }
                        this.bar.statusCollistion = true;
                    }
                } else {
                    for (let c = 0; c < brickColumnCount; c++) {
                        for (let r = 0; r < brickRowCount; r++) {
                            if (game.bricks.brick[c][r] !== 0) {
                                if (checkCollision(game.ball, game.bricks.brick[c][r])) {
                                    game.soundManager.playBouncingSound();
                                    game.ball.x -= game.ball.Vx;
                                    game.ball.y -= game.ball.Vy;
                                    if (game.ball.y > game.bricks.brick[c][r].y + game.bricks.brick[c][r].height) {
                                        game.ball.Vy = -game.ball.Vy;
                                    } else if (game.ball.y < game.bricks.brick[c][r].y) {
                                        game.ball.Vy = -game.ball.Vy;
                                    } else if (game.ball.y < game.bricks.brick[c][r].y + game.bricks.brick[c][r].height) {
                                        game.ball.Vx = -game.ball.Vx;
                                    }
                                    game.bar.statusCollistion = false;
                                    game.bricks.brick[c][r].value--;
                                    if (game.bricks.brick[c][r].value === 0) {
                                        this.score += 1;
                                        this.bricks.count--;
                                    }
                                    if (this.score >= highscore) {
                                        highscore = this.score;
                                    }
                                }

                            }

                        }
                    }

                }


            }
        }
        this.draw = function () {
            ctx.clearRect(0, 0, 400, 700);
            ctx.drawImage(this.pictureManager.background, 200 + this.bar.x / 7, 0, 400, 700, 0, 0, 400, 700);
            if (this.status === GAME_START) {
                ctx.fillStyle = "white"
                ctx.font = "20px Arial";
                ctx.fillText("PRESS SPACE BUTTON", 80, 350);
                ctx.fillText("PRESS SPACE BUTTON", 80, 350);
                ctx.fillText("TO START NEW GAME", 85, 390);
                ctx.font = "14px Arial";
                ctx.fillText("PRESS UP or DOWN TO CHANGE ANGLE", 50, 420);
                ctx.closePath();
                this.ball.drawDrirection();
            } else if (this.status === GAME_END) {
                ctx.fillStyle = "white"
                ctx.font = "22px Arial";
                ctx.fillText("GAME OVER", 130, 260);
                ctx.fillText("HIGHSCORE : " + highscore, 115, 290);
                ctx.fillText("YOUR SCORE : " + this.score, 110, 320);
                ctx.beginPath();
                ctx.fillStyle = "white"
                ctx.font = "17px Arial";
                ctx.fillText("PRESS ENTER BUTTON", 100, 350);
                ctx.fillText("TO START NEW GAME", 105, 380);
            } else if (this.status === GAME_NEXTLEVEL) {
                ctx.fillStyle = "white"
                ctx.font = "22px Arial";
                ctx.fillText("NEXT LEVEL", 130, 260);
                ctx.beginPath();
                ctx.fillStyle = "white"
                ctx.font = "17px Arial";
                ctx.fillText("PRESS SPACE BUTTON", 100, 350);
                ctx.fillText("TO START NEXT LEVEL", 100, 380);
                this.ball.drawDrirection();
            }

            this.bar.draw();
            this.ball.drawing();
            this.bricks.draw();
            ctx.beginPath();
            ctx.fillStyle = "white"
            ctx.font = "12px Arial";
            ctx.fillText("HIGHSCORE : " + highscore, 160, 15);
            ctx.fillText("YOUR SCORE : " + this.score, 280, 15);
            ctx.fillText("GAME LEVEL " + GAME_LEVEL, 280, 670);


        }

    }


}

class Boundary {
    constructor(x, y, width, height) {
        this.statusCollistion = false;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
