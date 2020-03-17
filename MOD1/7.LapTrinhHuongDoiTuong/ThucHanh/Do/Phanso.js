class Phanso {
    constructor(tuso, mauso) {
        this.tuso = tuso;
        if (mauso === 0) {
            this.mauso = undefined;
        } else {
            this.mauso = mauso;
        }
    }
}


function addPS(item1, item2) {
    let tuSo = item1.tuso * item2.mauso + item2.tuso * item1.mauso;
    let mauSo = item1.mauso * item2.mauso;
    alert("Phép cộng là " + tuSo +"/"+ mauSo);
}
let PS1 = new Phanso(1,3);
let PS2 = new Phanso(2,3);
addPS(PS1,PS2);