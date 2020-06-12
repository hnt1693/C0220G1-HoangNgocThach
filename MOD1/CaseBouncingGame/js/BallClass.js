class Ball {
    constructor(x, y, angle, radius, speed) {
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.radius = radius;
        this.Vx = -this.speed * Math.cos((this.angle) / 180 * Math.PI);
        this.Vy = -this.speed * Math.sin((this.angle) / 180 * Math.PI);
        this.statusFly = false;
        this.update = function () {
            this.x += this.Vx;
            this.y += this.Vy;
        }
        this.increaseAngle = function () {
            if (this.angle < 170) {
                if ((game.status === GAME_START) || (game.status === GAME_NEXTLEVEL)) {
                    this.angle += 1;
                    this.Vx = -this.speed * Math.cos((this.angle) / 180 * Math.PI);
                    this.Vy = -this.speed * Math.abs(Math.sin((this.angle) / 180 * Math.PI));
                }
            }
        }
        this.decreaseAngle = function () {
            if ((game.status === GAME_START) || (game.status === GAME_NEXTLEVEL)) {
                if (this.angle > 10) {
                    this.angle -= 1;
                    this.Vx = -this.speed * Math.cos((this.angle) / 180 * Math.PI);
                    this.Vy = -this.speed * Math.abs(Math.sin((this.angle) / 180 * Math.PI));
                }
            }
        }
        this.drawing = function () {
            ctx.drawImage(game.pictureManager.ball, this.x - 7, this.y - 7, 14, 14);
            ctx.closePath();
        }
        this.drawDrirection = function () {
            ctx.moveTo(this.x, this.y);
            ctx.strokeStyle = 'yellow';
            ctx.lineTo(this.x - 40 * Math.cos(this.angle / 180 * Math.PI), this.y - 40 * Math.sin(this.angle / 180 * Math.PI));
            ctx.stroke();
        }
    }
}
