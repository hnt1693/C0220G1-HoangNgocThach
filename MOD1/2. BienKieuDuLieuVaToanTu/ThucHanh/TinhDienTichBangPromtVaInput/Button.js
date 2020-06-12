function tinhDT2() {
let x = document.getElementById("height").value;
let y = document.getElementById("width").value;
if (x==""){
    alert("Bạn chưa nhập hoặc nhập sai chiều rộng");
}
else if (y==""){
    alert("Bạn chưa nhập hoặc nhập sai chiều cao");
}
else document.write("Diện tích bạn cần tính là :" , x*y);
}