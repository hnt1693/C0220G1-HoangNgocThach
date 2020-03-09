let users = [];
let user = [];
users[0] = ["Hoàng Ngọc Thạch", "Nam", "01.06.1993", "hnt1693@gmail.com", "Triệu Trung", " Diamond", "40", "4", "15", "House", "Vip"];
users[1] = ["Nguyễn Xuân Khánh", "Nữ", "05.03.1993", "xuankhanhqt@gmail.com", "Triệu Trung", " Diamond", "50", "3", "5", "Villa", "Vip"];
users[2] = ["Trần Văn Thanh", "Nam", "05.03.1993", "xuankhanhqt@gmail.com", "Huế", " Diamond", "35", "1", "2", "Villa", "Room"];
let add_accept;
let name_check;
let birthday_check;
let email_check;
let adress_check;
let discount_check;
let customer_check;
let people_check;
let rentdays_check;
let rentservice_check;
let rentroom_check;

function add_User() {
    add_accept = 0;
    name_check = 0;
    birthday_check = 0;
    email_check = 0;
    adress_check = 0;
    discount_check = 0;
    customer_check = 0;
    people_check = 0;
    rentdays_check = 0;
    rentservice_check = 0;
    rentroom_check = 0;

    let name = document.getElementById("name").value;
    if (name === "") {
        name_check = 0;
    } else {
        name_check = 1;
    }
    let birthday = document.getElementById("birthday").value;
    check_Bitrhday(birthday);
    let email = document.getElementById("email").value;
    check_Email(email);
    let adress;
    let get_adress = document.getElementById("adress");
    check_Adress(get_adress.selectedIndex);
    adress = get_adress.options[get_adress.selectedIndex].text;
    let discount = document.getElementById("discount").value;
    check_Discount(discount);
    let customer;
    let get_customer = document.getElementById("customer");
    check_Customer(get_customer.selectedIndex);
    customer = get_customer.options[get_customer.selectedIndex].text;
    let people = document.getElementById("people").value;
    check_People(people);
    let rentdays = document.getElementById("rentdays").value;
    check_Rentdays(rentdays);
    let rentservice;
    let get_rentservice = document.getElementById("rentservice");
    check_Rentservice(get_rentservice.selectedIndex);
    rentservice = get_rentservice.options[get_rentservice.selectedIndex].text;
    let rentroom;
    let get_rentroom = document.getElementById("rentroom");
    check_Room(get_rentroom.selectedIndex);
    rentroom = get_rentroom.options[get_rentroom.selectedIndex].text;
    let sexcheck = document.getElementsByName("gender");
    let sex;
    for (let i = 0; i < 2; i++) {
        if (sexcheck[i].checked)
            sex = sexcheck[i].value;
    }
    add_accept = name_check + birthday_check + email_check + adress_check + discount_check + customer_check + people_check + rentdays_check + rentroom_check + rentservice_check;
    if (add_accept === 10) {
        user = [name, sex, birthday, email, adress, customer, discount, people, rentdays, rentservice, rentroom];
        users.push(user);
    } else {
        alert(add_accept);
        alert("Vui lòng kiểm tra lại thông tin bạn nhập");
    }
}

function show_User() {
    alert(users[users.length - 1]);
    let a = document.getElementById("form");
    a.style.display = "none";

}

function check_Bitrhday(birthday) {
    let xiec = [];
    let dem_xiec = 0;
    if (birthday.length !== 10) {
        birthday_check = 0;
    } else {
        //Tìm giá trị số đếm số xiệc và gán vị trí xiệc vào mảng.
        for (let i = 0; i < birthday.length; i++) {
            if (birthday.charAt(i) === "/") {
                xiec.push(i);
                dem_xiec += 1;
            }
        }
        //Kiểm tra số xiệc quá 2 hay k?
        if (dem_xiec === 2) {
            //Cắt thành chuỗi con để kiểm tra ngày tháng năm
            let day = birthday.substr(0, 2);
            let month = birthday.substr(3, 2);
            let year = birthday.substr(6, 4);
            if ((xiec[0] === 2) && (xiec[1]) === 5) {
                let check_day = isNaN(parseInt(day));
                let check_month = isNaN(parseInt(month));
                let check_year = isNaN(parseInt(year));
                if ((!check_day) || (!check_month) || (!check_year)) {
                    let check_numday = (parseInt(day) > 0) && (parseInt(day) <= 31);
                    let check_nummonth = (parseInt(month) > 0) && (parseInt(month) <= 12);
                    if ((check_numday) && (check_nummonth)) {
                        birthday_check = 1;
                    } else {
                        birthday_check = 0;

                    }

                } else {
                    birthday_check = 0;
                }

            } else {
                birthday_check = 0;
            }
        } else {
            birthday = 0;
        }
    }


}

function check_Email(email) {
    email_check = false;
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
        email_check = 0;
    } else if (space >= 0) {
        email_check = 0;
    } else if (dot === email.length - 1) {
        email_check = 0;
    } else if ((a_cong === undefined) | (dot === undefined)) {
        email_check = 0;
    } else if (a_cong === dot - 1) {
        email_check = 0;
    } else if ((dem_dot > 1) | (dem_a > 1)) {
        email_check = 0;
    } else {
        email_check = 1;
    }
}

function check_Discount(index) {
    discount_check = 0;
    if (index !== "") {
        let so_nguyen = Number.isInteger(parseInt(index));
        if (!so_nguyen) {
            discount_check = 0;
        } else {
            if ((parseInt(index) >= 0) && (parseInt(index) <= 100)) {

                discount_check = 1;
            } else {
                discount_check = 0;
            }
        }
    } else {
        discount_check = 0;

    }
}

function check_People(index) {
    people_check = 0;

    if (index !== "") {
        let so_nguyen = Number.isInteger(parseInt(index));
        if (!so_nguyen) {

            people_check = 0;
        } else {
            if (parseInt(index) >= 0) {

                people_check = 1;
            } else {

                people_check = 0;
            }
        }
    } else {

        people_check = 0;
    }
}

function check_Rentdays(index) {
    rentdays_check = 0;

    if (index !== "") {
        let so_nguyen = Number.isInteger(parseInt(index));
        if (!so_nguyen) {

            rentdays_check = 0;
        } else {
            if (parseInt(index) >= 0) {

                rentdays_check = 1;
            } else {

                rentdays_check = 0;
            }
        }
    } else {
        rentdays_check = 0;
    }
}

function check_Adress(index) {

    let get_adress = document.getElementById("adress");
    if (index === 0) {
        adress_check = 0;
    } else {
        adress_check = 1;
    }
}

function check_Customer(index) {

    let get_customer = document.getElementById("customer");
    if (index === 0) {
        customer_check = 0;
    } else {
        customer_check = 1;
    }
}

function check_Rentservice(index) {

    let get_rentservice = document.getElementById("rentservice");
    if (index === 0) {
        rentservice_check = 0;
    } else {
        rentservice_check = 1;
    }
}

function check_Room(index) {

    let get_rentroom = document.getElementById("rentroom");
    if (index === 0) {
        rentroom_check = 0;
    } else {
        rentroom_check = 1;
    }
}

function show_Form_Edit() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("usersList").style.display = "block";

    let tableHtml = "<table class='table table-striped'>" +
        "<tr><th>ID</th><th>Name</th><th>Gender</th><th>Birthday</th><th>Actions</th></tr>";
    let id = 1;
    users.forEach((user) => {
            tableHtml += "<tr>" + "<td>" + id + "</td>" +
                "<td>" + user[0] + "</td>" +
                "<td>" + user[1] + "</td>" +
                "<td>" + user[2] + "</td>" +
                "<td><button class = \"btn btn-info" + "\"  id=\"edit" + id + "\" onclick='editUser(" + (id - 1) + ")'>Edit</button>  <button class = \"btn btn-danger" + "\"  id=\"delete" + id + "\" onclick='delete_User(" + (id - 1) + ")'>Delete</button></td>";

            id = id + 1;
        }
    );

    document.getElementById("usersList").innerHTML = tableHtml;
    search();
}

function editUser(index) {
    document.getElementById("form1").style.display = "none";
    document.getElementById("usersList").style.display = "none";
    document.getElementById("form2").style.display = "block";
    alert(index);
    let get_name = document.getElementById("name2");
    get_name.selectedIndex = index + 1;
    alert(get_name.selectedIndex);
    auto_inf();
}

function delete_User(index) {

}

function show_Form_Add() {
    document.getElementById("form2").style.display = "none";
    document.getElementById("usersList").style.display = "none";
    document.getElementById("form1").style.display = "block";

    delete_list();
    clear_FormAdd();

}

function search() {
    let select = document.getElementById("name2");
    for (let i = 0; i < users.length; i++) {
        var option = document.createElement("option");
        option.text = users[i][0];
        select.add(option, select[i + 1]);
    }

}

///Tự động điền danh sách vào
function auto_inf() {
    let get_name = document.getElementById("name2");
    let i = get_name.selectedIndex;
    alert(i);
    document.getElementById("name23").value = users[i - 1][0];
    document.getElementById("birthday2").value = users[i - 1][2];
    document.getElementById("email2").value = users[i - 1][3];
    let get_adress = document.getElementById("adress2");
    get_adress.options[get_adress.selectedIndex].text = users[i - 1][4];
    document.getElementById("discount2").value = users[i - 1][6];
    get_adress = document.getElementById("customer2");
    get_adress.options[get_adress.selectedIndex].text = users[i - 1][5];
    document.getElementById("people2").value = users[i - 1][7];
    document.getElementById("rentdays2").value = users[i - 1][8];
    get_adress = document.getElementById("rentservice2");
    get_adress.options[get_adress.selectedIndex].text = users[i - 1][9];
    get_adress = document.getElementById("rentroom2");
    get_adress.options[get_adress.selectedIndex].text = users[i - 1][10];
    let sexcheck = document.getElementsByName("gender2");
    if (users[i - 1][1] === "Nam") {
        sexcheck[0].checked = true;
    } else {
        sexcheck[1].checked = true;
    }

    // let sexcheck = document.getElementsByName("gender");

}

function delete_list() {
    let select = document.getElementById("name2");
    let dem = users.length - 1;
    while (dem-- > 0) {
        select.remove(dem);
    }
}

function clear_FormAdd() {
    document.getElementById("name").value = "";
    document.getElementById("birthday").value = "";

    document.getElementById("email").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("people").value = "";
    document.getElementById("rentdays").value = "";
    let get_adress = document.getElementById("adress");
    get_adress.selectedIndex = 0;
    let get_customer = document.getElementById("customer");
    get_customer.selectedIndex = 0;
    let get_rentroom = document.getElementById("rentroom");
    get_rentroom.selectedIndex = 0;
    let get_rentservice = document.getElementById("rentservice");
    get_rentservice.selectedIndex = 0;


}
