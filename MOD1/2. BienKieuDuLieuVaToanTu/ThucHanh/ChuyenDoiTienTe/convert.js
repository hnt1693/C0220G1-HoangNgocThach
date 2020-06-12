function convert() {
    let Fromcurrency = document.getElementById("FromCurrency").value;
    let ToCurrency = document.getElementById("ToCurrency").value;
    let HeSoChuyenDoi;
    let Amount = document.getElementById("Amount").value;
    if (Amount=="") {
    alert("Bạn chưa nhập số tiền cần quy đổi");
    } else {
    if (Fromcurrency == ToCurrency) {
        HeSoChuyenDoi = 1;
    } else if (Fromcurrency == "VND") {
        HeSoChuyenDoi = 1 / 25000;
    } else if (Fromcurrency == "USD") {
        HeSoChuyenDoi = 25000;
    }
        let Total = parseInt(Amount) * HeSoChuyenDoi;
        document.getElementById("resuilt").innerHTML = "Kết quả chuyển đổi là " + Total + document.getElementById("ToCurrency").value;
    }
}