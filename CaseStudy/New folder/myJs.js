let users = [];
users[0] = {
    name: "Hoàng Ngọc Thạch",
    sex: "Nam",
    cmnd: "197314284",
    birthday: "06/01/1993",
    email: "hnt1693@gmail.com",
    adress: "Nơi khác",
    customer: "Diamond",
    discount: "40",
    rentedday: "03/05/2020",
    people: "15",
    rentservice: "House",
    rentroom: "Vip"

};
users[1] = {
    name: "Trần Văn Thanh",
    sex: "Nữ",
    birthday: "01/06/1993",
    email: "hnt1693@gmail.com",
    adress: "Nơi khác",
    customer: "Gold",
    discount: "40",
    rentedday: "03/13/2020",
    people: "15",
    rentservice: "House",
    rentroom: "Vip",
    cmnd: "197215814"
};
users[2] = {
    name: "Nguyễn Xuân Khánh",
    sex: "Nam",
    birthday: "01/06/1993",
    email: "hnt1693@gmail.com",
    adress: "Hà Nội",
    customer: "Diamond",
    discount: "40",
    rentedday: "03/13/2020",
    people: "15",
    rentservice: "House",
    rentroom: "Vip",
    cmnd: "197215845"
};
var getProperty = function (index, propertyName) {

    return users[index][propertyName];
};

function add_User() {
    let add_accept = 0;
    let name_check = 0;

    let name = document.getElementById("name");
    let birthday = document.getElementById("birthday");
    let email = document.getElementById("email");
    let adress = document.getElementById("adress");
    let discount = document.getElementById("discount");
    let customer = document.getElementById("customer");
    let people = document.getElementById("people");
    let cmnd = document.getElementById("cmnd");
    let renteddays = document.getElementById("rentedday");
    let rentservice = document.getElementById("rentservice");
    let sex = document.getElementsByName("Gender");
    let rentroom = document.getElementById("rentroom");

    if (name.value !== null) {
        if (name.value === "") {
            name_check = 0;
        } else {
            name_check = 1;
        }
    } else {
        alert("Vui long")
    }
    check_Email(email.value);
    check_Adress(adress.selectedIndex);
    let adress_value = adress.options[adress.selectedIndex].text;
    check_Discount(discount.value);
    check_Cmnd(cmnd.value);
    check_Customer(customer.selectedIndex);
    let customer_value = customer.options[customer.selectedIndex].text;
    check_People(people.value);
    check_Rentservice(rentservice.selectedIndex);
    let rentservice_value = rentservice.options[rentservice.selectedIndex].text;
    check_Room(rentroom.selectedIndex);
    let rentroom_value = rentroom.options[rentroom.selectedIndex].text;
    let sex_value;
    for (let i = 0; i < 2; i++) {

        if (sex[i].checked) {
            sex_value = sex[i].value;
        }
    }
    add_accept = name_check + email_check + check_cmnd + adress_check + discount_check + customer_check + people_check + rentroom_check + rentservice_check;
    if (add_accept === 9) {
        let accept = confirm("Bạn muốn thêm khách hàng này chứ?");
        if (accept) {
            users.push({
                name: name.value,
                email: email.value,
                cmnd: cmnd.value,
                sex: sex_value,
                birthday: birthday.value,
                adress: adress_value,
                customer: customer_value,
                discount: discount.value,
                rentedday: renteddays.value,
                people: people.value,
                rentservice: rentservice_value,
                rentroom: rentroom_value
            });
            users_List();
        }
    } else {

        alert("Vui lòng kiểm tra lại thông tin bạn nhập");

    }
}


function check_Email(email) {

    let a_cong;
    let dot;
    let dem_a = 0;
    let dem_dot = 0;
    let space;
    //Kiểm tra phần tư / và @
    for (let i = 0; i < email.length; i++) {
        if (email.charAt(i) === "@") {
            a_cong = i;
            dem_a += 1;
        }
        if (email.charAt(i) === ".") {
            dot = i;
            dem_dot += 1;
        }
        if (email.charAt(i) === " ") {
            space = i;
        }
    }
    if (a_cong === 0) {
        return email_check = 0;
    } else if (space >= 0) {
        return email_check = 0;
    } else if (dot === email.length - 1) {
        return email_check = 0;
    } else if ((a_cong === undefined) | (dot === undefined)) {
        return email_check = 0;
    } else if (a_cong === dot - 1) {
        return email_check = 0;
    } else if ((dem_dot > 1) | (dem_a > 1)) {
        return email_check = 0;
    } else {
        return email_check = 1;
    }
}

function check_Adress(index) {
    if (index === 0) {
        return adress_check = 0;
    } else {
        return adress_check = 1;
    }
}

function check_Discount(index) {

    if (index !== "") {
        let so_nguyen = Number.isInteger(parseInt(index));
        if (!so_nguyen) {
            return discount_check = 0;
        } else {
            if ((parseInt(index) >= 0) && (parseInt(index) <= 100)) {

                return discount_check = 1;
            } else {
                return discount_check = 0;
            }
        }
    } else {
        return discount_check = 0;

    }
}

function check_Customer(index) {


    if (index === 0) {
        return customer_check = 0;
    } else {
        return customer_check = 1;
    }
}

function check_People(index) {


    if (index !== "") {
        let so_nguyen = Number.isInteger(parseInt(index));
        if (!so_nguyen) {

            return people_check = 0;
        } else {
            if (parseInt(index) >= 0) {

                return people_check = 1;
            } else {

                return people_check = 0;
            }
        }
    } else {

        return people_check = 0;
    }
}

function check_Rentservice(index) {


    if (index === 0) {
        return rentservice_check = 0;
    } else {
        return rentservice_check = 1;
    }
}

function check_Room(index) {

    if (index === 0) {
        return rentroom_check = 0;
    } else {
        return rentroom_check = 1;
    }
}

function check_Cmnd(index) {

    if ((index > 0) && (index.length === 9)) {
        return check_cmnd = 1;
    } else
        return check_cmnd = 0;
}

function users_List() {
    showform_UsersList();
    let tableHtml = "<table class='table table-striped'>" +
        "<tr><th>ID</th><th>Name</th><th>Gender</th><th>Birthday</th><th>Actions</th></tr>";
    let id = 1;
    users.forEach((user) => {
            tableHtml += "<tr>" + "<td>" + id + "</td>" +
                "<td style='text-align: left'>" + user["name"] + "</td>" +
                "<td >" + user["sex"] + "</td>" +
                "<td>" + user["birthday"] + "</td>" +
                "<td><button class = \"btn btn-info" + "\"  id=\"edit" + id + "\" onclick='editUser(" + (id - 1) + ")'>Edit</button>  <button class = \"btn btn-danger" + "\"  id=\"delete" + id + "\" onclick='delete_User(" + (id - 1) + ")'>Delete</button>  <button class = \"btn btn-success" + "\"  id=\"delete" + id + "\" onclick='bill(" + (id - 1) + ")'>Tính tiền</button></td>";
            id = id + 1;
        }
    );
    document.getElementById("tableList").innerHTML = tableHtml;
}

function editUser(id) {
    showform_Infor();
    let name = document.getElementById("name2");
    let birthday = document.getElementById("birthday2");
    let email = document.getElementById("email2");
    let adress = document.getElementById("adress2");
    let discount = document.getElementById("discount2");
    let customer = document.getElementById("customer2");
    let people = document.getElementById("people2");
    let cmnd = document.getElementById("cmnd2");
    let renteddays = document.getElementById("rentedday2");
    let rentservice = document.getElementById("rentservice2");
    let sex = document.getElementsByName("Gender2");
    let rentroom = document.getElementById("rentroom2");
    name.value = users[id]["name"];
    email.value = users[id]["email"];
    adress.options[adress.selectedIndex].text = users[id]["adress"];

    adress.selectedIndex;
    birthday.value = users[id]["birthday"];
    renteddays.value = users[id]["rentedday"];
    discount.value = users[id]["discount"];
    customer.options[customer.selectedIndex].text = users[id]["customer"];

    people.value = users[id]["people"];
    rentservice.options[rentservice.selectedIndex].text = users[id]["rentservice"];

    rentroom.options[rentroom.selectedIndex].text = users[id]["rentroom"];

    cmnd.value = users[id].cmnd;
    return id_edit = id;
    if (users[id]["sex"] === "Nam") {
        sex[0].checked = true;
    } else {
        sex[1].checked = true;
    }
}

function modified() {

    showform_Infor()
    let add_accept = 0;
    let name_check = 0;
    let name = document.getElementById("name2");
    let birthday = document.getElementById("birthday2");
    let email = document.getElementById("email2");
    let adress = document.getElementById("adress2");
    let discount = document.getElementById("discount2");
    let customer = document.getElementById("customer2");
    let people = document.getElementById("people2");
    let cmnd = document.getElementById("cmnd2");
    let renteddays = document.getElementById("rentedday2");
    let rentservice = document.getElementById("rentservice2");
    let sex = document.getElementsByName("Gender2");
    let rentroom = document.getElementById("rentroom2");
    if (name.value !== null) {
        if (name.value === "") {
            name_check = 0;
        } else {
            name_check = 1;
        }
    } else {
        alert("Vui long")
    }
    check_Email(email.value);
    // check_Adress(adress.selectedIndex);
    let adress_value = adress.options[adress.selectedIndex].text;
    check_Discount(discount.value);
    check_Cmnd(cmnd.value);
    // check_Customer(customer.selectedIndex);
    let customer_value = customer.options[customer.selectedIndex].text;
    check_People(people.value);
    // check_Rentservice(rentservice.selectedIndex);
    let rentservice_value = rentservice.options[rentservice.selectedIndex].text;
    // check_Room(rentroom.selectedIndex);
    let rentroom_value = rentroom.options[rentroom.selectedIndex].text;
    let sex_value;
    for (let i = 0; i < 2; i++) {
        if (sex[i].checked) {
            sex_value = sex[i].value;
        }
    }
    add_accept = name_check + email_check + check_cmnd + discount_check + people_check;
    // console.log(name_check + " " + email_check + " " + check_cmnd + " " + adress_check + " " + discount_check + " " + customer_check + " " + people_check + " " + rentroom_check + " " + rentservice_check);

    ;
    if (add_accept === 5) {
        let cont = confirm("Bạn muốn cập nhật thay đổi cho khách hàng " + users[id_edit]["name"] + " chứ?");
        if (cont) {
            users[id_edit] = {
                name: name.value,
                email: email.value,
                cmnd: cmnd.value,
                sex: sex_value,
                birthday: birthday.value,
                adress: adress_value,
                customer: customer_value,
                discount: discount.value,
                rentedday: renteddays.value,
                people: people.value,
                rentservice: rentservice_value,
                rentroom: rentroom_value
            };
        }
        users_List();
    }
}

function delete_User(id) {
    let confirm_delete = confirm("Bạn muốn xóa khách hàng " + users[id].name + " chứ?");
    if (confirm_delete) {
        for (let i = id; i < users.length; i++) {
            users[i] = users[i + 1];
        }
        users.pop();
        users_List();
    }
}

function refresh() {
    location.reload();

}

function showform_UsersList() {
    document.getElementById("form_Add").style.display = "none";
    document.getElementById("form_usersList").style.display = "block";
    document.getElementById("form_Infor").style.display = "none";
}

function showform_Add() {
    document.getElementById("form_Add").style.display = "block";
    document.getElementById("form_usersList").style.display = "none";
    document.getElementById("form_Infor").style.display = "none";
}

function showform_Infor() {
    document.getElementById("form_Add").style.display = "none";
    document.getElementById("form_usersList").style.display = "none";
    document.getElementById("form_Infor").style.display = "block";
}

function rentDays(id) {
    let date_now = new Date(Date.now());
    let date_rent = new Date(users[id].rentedday);
    var Difference_In_Time = date_now - date_rent;
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        let thap_phan = Difference_In_Days - Math.floor(Difference_In_Days);
    let rentdays;
    if (thap_phan < 0.2) {
        rentdays = Math.floor(Difference_In_Days);
    } else {
        rentdays = Math.ceil(Difference_In_Days);
    }
    return rentdays;
}

function bill(id) {
    // Số tiền giảm giá = giảm giá theo địa chỉ + giảm giá theo thời gian lưu trú + giảm giá theo loại Customer

    let adress_discount;
    switch (users[id].adress) {
        case "Hà Nội": {
            adress_discount = 20;
            break;
        }
        case "Đà Nẵng" : {
            adress_discount = 10;
            break;
        }
        case "Hồ Chí Minh": {
            adress_discount = 5;
            break
        }
        default : {
            adress_discount = 0;
            break;
        }
    }
    let rentdays_discount;
    if (rentDays(id) > 7) {
        rentdays_discount = 30;
    } else if (rentDays(id) > 5) {
        rentdays_discount = 20;
    } else if (rentDays(id) > 2) {
        rentdays_discount = 10;
    } else {
        rentdays_discount = 0;
    }
    let customer_discount = 0;
    switch (users[id].customer) {
        case "Platium": {
            customer_discount = 15;
            break;
        }
        case "Diamond": {
            customer_discount = 10;
            break;
        }
        case "Gold": {
            customer_discount = 5;
            break;
        }
        case "Silver": {
            customer_discount = 2;
            break;
        }
        default : {
            customer_discount = 0;
            break;
        }
    }
    let total_discount = adress_discount + rentdays_discount + customer_discount;
    let cost_service;
    switch (users[id].rentservice) {
        case "Villa": {
            cost_service = 500;
            break;
        }
        case "House": {
            cost_service = 300;
            break;
        }
        case "Room": {
            cost_service = 100;
            break;
        }
    }
    let cost_total = cost_service*rentDays(id) - total_discount;
    alert(cost_total+ "$");
}
