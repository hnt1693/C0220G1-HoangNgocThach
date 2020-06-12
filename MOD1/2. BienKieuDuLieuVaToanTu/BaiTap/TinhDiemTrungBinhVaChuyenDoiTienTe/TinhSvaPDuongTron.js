function TinhSP() {
    let x = prompt("Nhập vào bán kính đường tròn bạn cần tính chu vi, diện tích");
    alert("Chu vi là " + parseInt(x) * Math.PI * 2 + " và " +
        "Diện Tích là : " + Math.pow(parseInt(x), 2) * Math.PI);

}