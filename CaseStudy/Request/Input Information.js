var selected_menu;
var index_users;
var index_user;
var users_count;
var users = [];

function infor_Visitor() {
    //Nhập thoogn tin khách hàng
    let continuos = true;
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
        // switch (rentservice) {
        //     case "Villa" : {
        //         cost_rentservice = 500;
        //         break;
        //     }
        //     case "House": {
        //         cost_rentservice = 300;
        //         break;
        //     }
        //     case "Room" : {
        //         cost_rentservice = 100;
        //         break;
        //     }
        // }
        // let total = cost_rentservice * parseInt(rentdays) * (1 - parseInt(discount) / 100);
        // lam_tron_so(total);
        let user = [name, birthday, email, adress, customer, discount, people, rentdays, rentservice, rentroom];
        users.push(user);
        alert(users.length);
        continuos = confirm("Bạn muốn nhập thêm khách hàng không ?");
    } while (continuos === true);
    users_count = users.length;
}


// FUNCTION Làm tròn số
function lam_tron_so(number) {
    value = Math.round((number + 0.00001) * 100) / 100;
}

//FunCTION Hiển thị menu chính
function Display_Menu(selected_menu) {
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
            show_user();
            document.getElementById("infVisitor").innerHTML = users[index_users - 1];
            break;
        }
        case  2: {
            edit_User();
            let continuos = true;
            do {
                users[index_users - 1][index_user - 1] = (prompt(" Nhập lại trường bạn muốn edit"));
            } while (continuos == false);
            show_user();
            document.getElementById("infVisitor").innerHTML = users[index_users - 1];
            break;
        }

    }
}

//Function lựa chọn menu


//FUNCTION hiển thị thông tin khách hàng
function show_user() {
    let continuos = true;
    do {
        index_users = prompt("Bạn nhập khách hàng bạn muốn xem thông tin. Hiện đang có " + (users_count) + " khách hàng");
        switch (parseInt(index_users)) {
            case 1:
            case 2:
            case 3 : {
                continuos = false;
                break;
            }
            default : {
                if (index_users === null) {
                    continuos = false;
                    break;
                }
            }
        }
    }
    while (continuos === true) ;
}

function edit_User() {
    let continuos = true;
    do {
        index_users = prompt("Bạn nhập khách hàng bạn muốn sửa thông tin. Hiện đang có " + (users_count) + " khách hàng");
        switch (parseInt(index_users)) {
            case 1:
            case 2:
            case 3 : {
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
                    switch (parseInt(index_user)) {
                        case 1:
                        case 2:
                        case 3 :
                        case 4 :
                        case 5:
                        case 6 :
                        case 7 :
                        case 8:
                        case 9 :
                        case 10 : {
                            continuos2 = false;
                            break;
                        }
                        default : {
                            if (index_user === null) {
                                continuos2 = false;
                                break;
                            }
                        }
                    }
                } while (continuos2 === true);
                continuos2 = false;
                break;
            }
            default: {
                if (index_users === null) {
                    continuos = false;
                    break;
                }
            }
        }
    } while (continuos === true);
}