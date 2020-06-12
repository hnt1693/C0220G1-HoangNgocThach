function Caculator(PhepToan) {
    let x = document.getElementById("text1").value;
    let y = document.getElementById("text2").value;
    if (x == "") {
        alert("Bạn chưa nhập ô số 1");
    } else if (y == "") {
        alert(" Bạn chưa nhập ô số 2");
    }
    if (PhepToan == Plus) {
        document.getElementById("Resuilt").innerHTML = parseInt(document.getElementById("text1").value) + parseInt(document.getElementById("text2").value);
    }
    if (PhepToan == NPlus) {
        document.getElementById("Resuilt").innerHTML = parseInt(document.getElementById("text1").value) - parseInt(document.getElementById("text2").value);
    }
}
