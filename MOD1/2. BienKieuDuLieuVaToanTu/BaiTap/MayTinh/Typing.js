function Typing(ThamSo) {
    document.getElementById("BieuThuc").value+= ThamSo;
    document.getElementById("BieuThuc").innerText;
}
function Resuilt() {
let Resuilt = eval(document.getElementById("BieuThuc").value);
document.getElementById("ResuiltText").innerText=Resuilt;
}