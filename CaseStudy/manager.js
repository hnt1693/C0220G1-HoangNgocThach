let users = [];
let user = [];
let selected_menu;
var index_users;
var index_user;
users[0] = ["Hoàng Ngọc Thạch", "01.06.1993", "hnt1693@gmail.com", "Triệu Trung", " Diamond", "40", "4", "15", "House", "Vip"];
users[1] = ["Nguyễn Xuân Khánh", "05.03.1993", "xuankhanhqt@gmail.com", "Triệu Trung", " Diamond", "50", "3", "5", "Villa", "Vip"];
users[2] = ["Trần Văn Thanh", "05.03.1993", "xuankhanhqt@gmail.com", "Huế", " Diamond", "35", "1", "2", "Villa", "Room"];
let feild_name = ["1. Tên khách hàng  : ", "2. Ngày sinh           : ", " 3. Địa chỉ email      : ", "4. Địa chỉ               : ", "5. Loại customer         : ", "6. Giảm giá                   : ", "7. Số lượng người  : ", "8. Số ngày thuê       : ", "9. Loại dịch vụ        : ", "10. Loại phòng       : "];

function load_data() {

    for (let i = 0; i < users.length; i++) {
        document.getElementById("infVisitor").innerHTML += (i + 1) + ". " + users[i][0] + "<br>";
    }
}

function add_User() {
    let checkadd = true;
    document.getElementById("infVisitor").innerHTML = "";
    do {
        let name = prompt("Nhập tên khách hàng");
        let birthday = prompt("Ngày sinh");
        let email = prompt(" Địa chỉ Email");
        let adress = prompt("Địa chỉ");
        let customer = prompt(" Loại customer : Diamond, Platinum, Gold, Silver, Member");
        let discount = prompt("% Giảm giá");
        let people = prompt("Số lượng người đi kèm");
        let rentdays = prompt("Số ngày thuê");
        let rentservice = prompt("Dịch vụ sử dụng : Villa, House, Room");
        let rentroom = prompt("Loại phòng thuê : Vip, Business, Normal");
        let user = [name, birthday, email, adress, customer, discount, people, rentdays, rentservice, rentroom];
        users.push(user);
        checkadd = confirm("Bạn muốn nhập thêm khách hàng không ?");
    } while (checkadd === true);
    for (let i = 0; i < users.length; i++) {
        document.getElementById("infVisitor").innerHTML += (i + 1) + ". " + users[i][0] + "<br>";
    }
}

function show_User() {
    document.getElementById("inf_user").innerHTML = "";
    let continuos = true;
    do {
        index_users = prompt("Bạn nhập khách hàng bạn muốn xem thông tin. Hiện đang có " + (users.length) + " khách hàng");
        if ((0 < parseInt(index_users)) && (parseInt(index_users) < users.length + 1)) {
            for (let i = 0; i < feild_name.length; i++) {
                document.getElementById("inf_user").innerHTML += feild_name[i] + users[parseInt(index_users) - 1][i] + "<br>";

            }
            continuos = false;
        }
        if (index_users === null) {
            continuos = false;
        }
    }
    while (continuos === true) ;
}


function display_Menu(selected_menu) {
    let continuos = true;
    do {
        selected_menu = prompt(" Bạn chọn các tùy chọn sau tương ứng để thực hiện công việc sẽ làm\n" +
            "1. Xem thông tin các khách hàng\n" +
            "2. Chỉnh sửa thông tin khách hàng \n" +
            "3. Hiển thị tiền cần phải trả");
        switch (parseInt(selected_menu)) {
            case 1:
            case 2:
            case 3 : {
                continuos = false;
                break;
            }
            default : {
                if (selected_menu === null) {
                    continuos = false;
                    break;
                }

            }

        }
    } while (continuos === true);
    switch (parseInt(selected_menu)) {
        case 1 : {
            show_User();
            break;
        }
        case  2: {
            edit_User();
            let continuos = true;
            show_user();
            break;
        }

    }
}


function edit_User() {
    let continuos = true;
    do {
        index_users = prompt("Bạn nhập khách hàng bạn muốn sửa thông tin. Hiện đang có " + (users.length) + " khách hàng");
        if (((0 < parseInt(index_users)) && (parseInt(index_users) < users.length + 1))) {
            let continuos2 = true;
            do {
                index_user = prompt("Bạn nhập thông tin bạn muốn sửa" + "\n" +
                    "1. Tên" + "\n"
                    + "2. Ngày sinh" + "\n"
                    + "3. Email" + "\n"
                    + "4. Địa chỉ" + "\n"
                    + "5. Loại khách" + "\n"
                    + "6. Giảm giá %" + "\n"
                    + "7. Số người đi cùng" + "\n"
                    + "8. Số ngày thuê" + "\n"
                    + "9. Dịch vụ" + "\n"
                    + "10. Loại phòng" + "\n");
                if ((0 < parseInt(index_user) && (parseInt(index_user) <= feild_name.length))) {
                    users[index_users - 1][index_user - 1] = prompt("Nhập lại nội dung sửa");
                    document.getElementById("infVisitor").innerHTML = "";
                    document.getElementById("inf_user").innerHTML = "";
                    for (let i = 0; i < users.length; i++) {
                        document.getElementById("infVisitor").innerHTML += (i + 1) + ". " + users[i][0] + "<br>";
                    }
                    for (let i = 0; i < feild_name.length; i++) {
                        document.getElementById("inf_user").innerHTML += feild_name[i] + users[parseInt(index_users) - 1][i] + "<br>";

                    }
                    continuos2 = false;
                }
                if (index_user === null) {
                    continuos2 = false;
                }

            } while (continuos2 === true);
            continuos = false;
        }
        if (index_users === null) {
            continuos = false;
        }

    }
    while (continuos === true) ;
}

function total_User() {
    let continuos = true;
    let discount_adress;
    let discount_customer;
    let cost_rentservice;
    let check_rentdays;
    let total_user;
    do {
        index = prompt("Nhập vào số thứ tự khách hàng bạn muốn tính tiền. Hiện đang có" + users.length + " khách hàng \n"
            + "Bạn vui lòng xem STT từ danh sách khách hàng");
        if ((parseInt(index) > 0) && (parseInt(index)) <= users.length) {
            switch (users[parseInt(index) - 1][3]) {
                case "Đà Nẵng": {
                    discount_adress = 20;
                    break;
                }
                case "Hà Nội": {
                    discount_adress = 30;
                    break;
                }
                case "Quảng Nam": {
                    discount_adress = 5;
                    break;
                }
                default : {
                    discount_adress = 0;
                    break;
                }
            }
            check_rentdays = parseInt((users[parseInt(index) - 1][7]));
            if (check_rentdays > 7) {
                discount_rentdays = 30;
            } else if (check_rentdays >= 5) {
                discount_rentdays = 20;
            } else {
                discount_rentdays = 10;
            }
            switch (users[parseInt(index) - 1][4]) {
                case "Diamond": {
                    discount_customer = 15;
                    break;
                }
                case "Platium": {
                    discount_customer = 10;
                    break;
                }
                case "Gold": {
                    discount_customer = 5;
                    break;
                }
                case "Silver": {
                    discount_customer = 2;
                    break;
                }
                default : {
                    discount_customer = 0;
                    break;
                }
            }
            switch ((users[parseInt(index) - 1][8])) {
                case "Villa" : {
                    cost_rentservice = 500;
                    break;
                }
                case "House": {
                    cost_rentservice = 300;
                    break;
                }
                case "Room": {
                    cost_rentservice = 100;
                    break;
                }
            }

            continuos = false;
        }
        if (index === null) {
            continuos = false;
        }
    } while (continuos == true);
    total_user = ((cost_rentservice) * check_rentdays) - discount_adress - discount_customer - discount_rentdays;
    console.log(lam_tron_so(total_user));
    alert("Số tiền cần phải trả là :" + value);
}

function lam_tron_so(number) {
    value = Math.round((number + 0.00001) * 100) / 100;
}

