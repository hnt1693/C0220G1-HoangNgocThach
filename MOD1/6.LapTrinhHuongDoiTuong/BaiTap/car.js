class Car {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
    }

    moveLeft = function () {
        if (this.x >= 0) {
            this.x = this.x - 5;
        }
    }
    moveReight = function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        if (this.x <= c.width - this.width) {
            this.x = this.x + 5;
        }
    }
    render = function () {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        // clearCanvas(this.x,this.y,this.width);
        ctx.clearRect(0, 0, 400, 700);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.width);
        ctx.stroke();
        ctx.lineTo(this.x + this.width, this.width + this.y);
        ctx.stroke();
        ctx.lineTo(this.x + this.width, this.y);
        ctx.stroke();
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

    }
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            toyota.moveLeft();
            toyota.render();
            break;
        case 39:
            toyota.moveReight();
            toyota.render();
            break;
    }
}

class rock {
    constructor(x, width, speed) {
        this.x = x;
        this.y = 0;
        this.width = width;
        this.speed = speed;
    }

    renderRock = function () {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        // ctx.clearRect(0, 0, c.width, c.height);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.width);
        ctx.stroke();
        ctx.lineTo(this.x + this.width, this.width + this.y);
        ctx.stroke();
        ctx.lineTo(this.x + this.width, this.y);
        ctx.stroke();
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }
    moveDown = function () {

        changeY(this.y);

        // if (this.y >= 0) {
        //     do {
        //             this.y = this.y + this.speed;
        //             console.log(this.y);
        //     }
        //     while (this.y <= c.height)
        // } else if (this.y > c.height) {
        //     this.y = 0;
        // }
    }

}


function docReady() {
    toyota.moveLeft();
    toyota.render();
    window.addEventListener('keydown', moveSelection);
}

function clearCanvas(x, y, width) {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.clearRect(x, y, width, width);
    let w = c.width;
    c.width = 600;
    c.width = w;
}

function changeY(index) {
    myVar = setTimeout(function () {
        index = index + 10;
        console.log(index);
        if (index === 100) {
            clearTimeout(myVar);
            return;
        }
        changeY(index)
    }, 1000)

}
