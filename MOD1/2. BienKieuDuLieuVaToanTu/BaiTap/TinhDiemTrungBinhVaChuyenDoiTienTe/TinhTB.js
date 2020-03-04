function TinhTB() {
    let DiemToan = prompt("Nhập điểm toán");
    let DiemHoa = prompt("Nhập điểm hóa");
    let TB = (parseInt(DiemToan) + parseInt(DiemHoa)) / 2;
    document.write(TB);
}