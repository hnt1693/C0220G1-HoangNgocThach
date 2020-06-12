class Game {
    constructor() {
        this.imageManager = new ImageManager();
        this.plane = new Plane(200, 600, 5);
        this.update = function () {
            this.plane.update();
        }
        this.draw = function () {
            ctx.clearRect(0,0,400,700)
          this.plane.draw()
        }
    }
}
