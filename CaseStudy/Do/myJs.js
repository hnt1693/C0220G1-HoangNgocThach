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
    rentroom: "Vip",
    paid: false

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
    cmnd: "197215814",
    paid: false
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
    cmnd: "197215845",
    paid: true
};
var getProperty = function (index, propertyName) {

    return users[index][propertyName];
};
Array.prototype.any = function (callback) {
    let i = this.length;
    while (i--) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

checkName();

function add_User() {
    let add_accept;
    let name_check;
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
        if (name.value.length === 0) {
            name_check = 0;
            document.getElementById("name").style.backgroundColor = '#ff5252';
        } else {
            name_check = 1;
            name.value = checkName(name.value);
            document.getElementById("name").style.backgroundColor = '#66bb6a';
        }
    }

    if (birthday.value.length === 0) {
        document.getElementById("birthday").style.backgroundColor = '#ff5252';
    }
    if (renteddays.value.length === 0) {
        document.getElementById("rentedday").style.backgroundColor = '#ff5252';
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
                rentroom: rentroom_value,
                paid: false
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

    if (email.length === 0) {
        email_check = 0;
        document.getElementById('email').style.backgroundColor = '#ff5252';
    }
    if (a_cong === 0) {
        email_check = 0;
        document.getElementById('email').style.backgroundColor = '#ff5252';
    } else if (space >= 0) {
        email_check = 0;
        document.getElementById('email').style.backgroundColor = '#ff5252';
    } else if (dot === email.length - 1) {
        email_check = 0;
        document.getElementById('email').style.backgroundColor = '#ff5252';
    } else if ((a_cong === undefined) | (dot === undefined)) {
        email_check = 0;
        document.getElementById('email').style.backgroundColor = '#ff5252'
    } else if (a_cong === dot - 1) {
        email_check = 0;
        document.getElementById('email').style.backgroundColor = '#ff5252'
    } else if ((dem_dot > 1) | (dem_a > 1)) {
        email_check = 0;
        document.getElementById('email').style.backgroundColor = '#ff5252'
    } else {
        email_check = 1;
        document.getElementById('email').style.backgroundColor = '#66bb6a';
    }


    return email_check;
}

function check_Adress(index) {
    if (index === 0) {
        adress_check = 0;
        document.getElementById('adress').style.backgroundColor = '#ff5252';
    } else {
        document.getElementById('adress').style.backgroundColor = '#66bb6a';
        adress_check = 1;
    }
    return adress_check;
}

function check_Discount(index) {

    if (index !== "") {
        let so_nguyen = Number.isInteger(parseInt(index));
        if (!so_nguyen) {
            discount_check = 0;
            document.getElementById('discount').style.backgroundColor = "#ff5252";
        } else {
            if ((parseInt(index) >= 0) && (parseInt(index) <= 100)) {
                document.getElementById('discount').style.backgroundColor = "#66bb6a";
                discount_check = 1;
            } else {
                discount_check = 0;
                document.getElementById('discount').style.backgroundColor = "#ff5252";
            }
        }
    } else {
        discount_check = 0;
        document.getElementById('discount').style.backgroundColor = "#ff5252";
    }
    return discount_check;
}

function check_Customer(index) {


    if (index === 0) {
        customer_check = 0;
        document.getElementById('customer').style.backgroundColor = '#ff5252';

    } else {
        customer_check = 1;
        document.getElementById('customer').style.backgroundColor = '#66bb6a';
    }
    return customer_check
}

function check_People(index) {


    if (index !== "") {
        let so_nguyen = Number.isInteger(parseInt(index));
        if (!so_nguyen) {
            document.getElementById('people').style.backgroundColor = '#ff5252';
            people_check = 0;
        } else {
            if (parseInt(index) >= 0) {
                document.getElementById('people').style.backgroundColor = '#66bb6a';
                people_check = 1;
            } else {
                document.getElementById('people').style.backgroundColor = '#ff5252';
                people_check = 0;
            }
        }
    } else {
        document.getElementById('people').style.backgroundColor = '#ff5252';
        people_check = 0;
    }
    return people_check;
}

function check_Rentservice(index) {


    if (index === 0) {
        rentservice_check = 0;
        document.getElementById('rentservice').style.backgroundColor = '#ff5252';
    } else {
        rentservice_check = 1;
        document.getElementById('rentservice').style.backgroundColor = '#66bb6a';
    }
    return rentservice_check;
}

function check_Room(index) {

    if (index === 0) {
        rentroom_check = 0;
        document.getElementById('rentroom').style.backgroundColor = '#ff5252';

    } else {
        rentroom_check = 1;
        document.getElementById('rentroom').style.backgroundColor = '#66bb6a';

    }
    return rentroom_check;
}

function check_Cmnd(index) {
    if ((index > 0) && (index.length === 9)) {
        check_cmnd = 1;
        document.getElementById("cmnd").style.backgroundColor = '#66bb6a';
    } else {
        check_cmnd = 0;
        document.getElementById("cmnd").style.backgroundColor = '#ff5252';
    }
    return check_cmnd;
}

function users_List() {
    showform_UsersList();
    let tableHtml = "<table class='table table-striped'>" +
        "<tr><th>ID</th><th>Name</th><th>Gender</th><th>Birthday</th><th>Actions</th></tr>";

    users.forEach((user, index) => {
            let button3;
            if (user["paid"] === true) {
                button3 = "Đã thanh toán";
            } else {
                button3 = "Tính tiền";
            }
            tableHtml += "<tr>" + "<td>" + (index + 1) + "</td>" +
                "<td style='text-align: left'>" + user["name"] + "</td>" +
                "<td >" + user["sex"] + "</td>" +
                "<td>" + user["birthday"] + "</td>" +
                "<td><button class = \"btn btn-primary btn-sm" + "\"  id=\"edit" + index + "\" onclick='editUser(" + (index) + ")'>Edit<i class=\"fas fa-edit pl-1\"></i></button>  " +
                "<button class = \"btn btn-danger btn-sm" + "\"  id=\"delete" + index + "\" onclick='delete_User(" + (index) + ")'>Delete<i class=\"fas fa-trash-alt pl-1\"></i></button>  " +
                "<button data-toggle=\"modal\" id=\"bill" + index + "\"   data-target=\"#centralModalSuccess\" class = \"btn btn-success btn-sm" + "\" style = 'width:150px ' onclick='bill(" + (index) + ")'>" + button3 + "<i class=\"fas fa-dollar-sign\"></i></button></td>";
        }
    );

    document.getElementById("tableList").innerHTML = tableHtml;
    for (let i = 0; i < users.length; i++) {
        document.getElementById("bill" + i).disabled = users[i].paid;
    }
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
    showform_Infor();
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
            name.value = checkName(name.value);
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
    let paid_now = users[id_edit].paid;
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
                rentroom: rentroom_value,
                paid: paid_now
            };
        }
        users_List();
        console.log(users[id_edit].paid);
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
    let name = document.getElementById("name");
    name.value = "";
    name.style.backgroundColor = "white";
    let birthday = document.getElementById("birthday");
    birthday.value = "";
    birthday.style.backgroundColor = 'white';
    let email = document.getElementById("email");
    email.value = "";
    email.style.backgroundColor = 'white';
    let adress = document.getElementById("adress");
    adress.selectedIndex = 0;
    adress.style.backgroundColor = "white";
    let discount = document.getElementById("discount");
    discount.value = "";
    discount.style.backgroundColor = "white";
    let customer = document.getElementById("customer");
    customer.selectedIndex = 0;
    customer.style.backgroundColor = "white";
    let people = document.getElementById("people");
    people.value = "";
    people.style.backgroundColor = 'white';
    let cmnd = document.getElementById("cmnd");
    cmnd.value = "";
    cmnd.style.backgroundColor = 'white';
    let renteddays = document.getElementById("rentedday");
    renteddays.value = "";
    renteddays.style.backgroundColor = 'white';
    let rentservice = document.getElementById("rentservice");
    rentservice.selectedIndex = 0;
    rentservice.style.backgroundColor = "white";
    let sex = document.getElementsByName("Gender");
    let rentroom = document.getElementById("rentroom");
    rentroom.selectedIndex = 0;
    rentroom.style.backgroundColor = "white";
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
    return parseInt(rentdays);
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
    let cost_total = cost_service * rentDays(id) - total_discount;
    document.getElementById("p1name").innerText = "Khách hàng :" + users[id].name;
    document.getElementById("p2adress").innerText = "Địa chỉ :" + users[id].adress;
    document.getElementById("p3rentedday").innerText = "Ngày bắt đầu thuê :" + users[id].rentedday + " . Số ngày thuê :" + rentDays(id);
    document.getElementById("p4timenow").innerText = "TỔNG SỐ TIỀN CẦN THANH TOÁN LÀ " + cost_total + "$";
    let x = document.getElementById("accept_pay").onclick = function () {
        users[id].paid = true;
        users_List();

    }
}

function checkName(a) {
    let wrong_char = ["~", "!", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "{", "}", "[", "]", ",", ".", '"', ";", "/", "@"];

    let fix_name = "";
    a.trim();

    for (let i = 0; i < a.length; i++) {
        let x = wrong_char.any((index) => index === a.charAt(i));
        if (!x) {
            fix_name += a.charAt(i);
        }
    }
    //xử lý các khoảng trăng :
    let x;
    do {
        let temp = fix_name.replace("  ", " ");
        if (temp === fix_name) {
            x = true;
        } else {
            x = false;
            fix_name = temp;
        }
    }
    while (x === false)
    return fix_name;
}





