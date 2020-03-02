function Typing(ThamSo) {
    let BieuThuc = document.getElementById("BieuThuc").value;
    if (ThamSo == Add){
       BieuThuc += document.getElementById("Add").name;
        document.getElementById("BieuThuc").value= BieuThuc;}
    else if (ThamSo == Sub)
        document.getElementById("BieuThuc").value = document.getElementById("BieuThuc").value + document.getElementById("Sub").name;
    else if (ThamSo == Multi)
        document.getElementById("BieuThuc").value = document.getElementById("BieuThuc").value + document.getElementById("Multi").name;
    else if (ThamSo == Divi)
        document.getElementById("BieuThuc").value = document.getElementById("BieuThuc").value + document.getElementById("Divi").name;
    else if (ThamSo == One)
        document.getElementById("BieuThuc").value = document.getElementById("BieuThuc").value + document.getElementById("One").name;
    else if (ThamSo = Resuilt)
        document.getElementById("ResuiltText").innerHTML = eval(document.getElementById("BieuThuc").value);

}
