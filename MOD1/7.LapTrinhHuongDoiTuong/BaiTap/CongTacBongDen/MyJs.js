class ElectLamp {
    constructor() {
        // this.status = false;
        this.turnOn = function () {
            this.statusCallback(true);
        };
        this.turnOff = function () {
            this.statusCallback(false);
        };
    }


}

class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = undefined;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchButton() {
        this.status = !this.status;
        if (this.status === true) {
            this.lamp.turnOn();
        } else {
            this.lamp.turnOff();
        }
    }
}

let switchButton = new SwitchButton();
let lamp = new ElectLamp();
switchButton.connectToLamp(lamp);
lamp.statusCallback = function (status) {
    renderLampStatus(status);
};
function renderLampStatus(status) {
    let imgFile = status === true ? "Den_Sang.gif" : "Den_Tat.gif";
    let statusText = status === true ? "Đèn đang mở" : "Đèn đang tắt";
    document.getElementById("nomination").innerHTML = statusText;
    document.getElementById("pic").src = imgFile;
}