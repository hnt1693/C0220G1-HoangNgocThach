var listProduct = [];
let flag = true;
let editIndex;

function addProduct() {
    let product = [];
    let productName = document.getElementById("product").value;
    let amount = document.getElementById("amount").value;
    let price = document.getElementById("price").value;
    product.push(productName);
    product.push(amount);
    product.push(price);
    if (flag === true) {
        listProduct.push(product);
    } else {
        listProduct[editIndex] = product;
    }
    flag = true
    drawProducts();
}

function drawProducts() {
    let dataListTag = document.getElementById("dataList");

    dataListTag.innerHTML = "<thead>\n" +
        "        <tr>\n" +
        "            <th>stt</th>\n" +
        "            <th>ten sp</th>\n" +
        "            <th>so luong</th>\n" +
        "            <th>gia</th>\n" +
        "            <th>thanh tien</th>\n" +
        "            <th>xoa</th>\n" +
        "        </tr>\n" +
        "        </thead>";

    for (i = 0; i < listProduct.length; i++) {
        let product = listProduct[i];
        dataListTag.innerHTML += "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + product[0] + "</td>" +
            "<td>" + product[1] + "</td>" +
            "<td>" + product[2] + "</td>" +
            "<td>" + product[1] * product[2] + "</td>" +
            "<td><button onclick='editProduct(" + i + ")'>Edit</button></td>" +
            "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>" + "</br>";
    }
}

function deleteProduct(index) {
    listProduct.splice(index, 1);
    drawProducts();
}

function editProduct(index) {
    flag = false;
    editIndex = index;
    document.getElementById("product").value = listProduct[editIndex][0];
    document.getElementById("amount").value = listProduct[editIndex][1];
    document.getElementById("price").value = listProduct[editIndex][2];
}