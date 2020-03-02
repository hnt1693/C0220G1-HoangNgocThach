function inpVisitor() {
    var name = prompt("Nhập tên khách hàng");
    let birthday = prompt("Ngày sinh");
    let email = prompt(" Địa chỉ Email");
    let adress = prompt("Địa chỉ");
    let customer = prompt(" Loại customer : Diamond, Platinum, Gold, Silver, Member");
    let discount = prompt("% Giảm giá");
    let people = prompt("Số lượng người đi kèm");
    let rentdays = prompt("Số ngày thuê");
    let rentservice = prompt("Dịch vụ sử dụng : Villa, House, Room");
    let rentroom = prompt("Loại phòng thuê : Vip, Business, Normal");
    document.getElementById("name").innerText = "1. Name : " + name;
    document.getElementById("birthday").innerText = "2.Birthday : " + birthday;
    document.getElementById("email").innerText = "3. Email : " + email;
    document.getElementById("adress").innerText = "4. Adress : " + adress;
    document.getElementById("customer").innerText = "5. Customer : " + customer;
    document.getElementById("discount").innerText = "6. Giảm giá : " + discount;
    document.getElementById("peoples").innerText = "7. Số người đi kèm : " + people;
    document.getElementById("rentdays").innerText = "8. Số ngày thuê : " + rentdays;
    document.getElementById("rentservice").innerText = "9. Sử dụng dịch vụ " + rentservice;
    document.getElementById("rentroom").innerText = "10. Loại phòng thuê : " + rentroom;
}

function ElementEdit() {
    let ElementEdit = prompt("Bạn nhập từ 1 - 10 tương ứng với thông tin muốn chỉnh sửa :" + "\n" +
        "1. Name" + "\n"
        + "2. Birthday" + "\n"
        + "3. Email" + "\n"
        + "4. Address" + "\n"
        + "5. Loại khách" + "\n"
        + "6. Giảm giá %" + "\n"
        + "7. Số người đi cùng" + "\n"
        + "8. Số ngày thuê" + "\n"
        + "9. Dịch vụ" + "\n"
        + "10. Loại phòng" + "\n")
    ;
    switch (ElementEdit) {
        case "1" : {
            var name = prompt("Nhập tên khách hàng");
            document.getElementById("name").innerText = "1. Name : " + name;
            breakl;
        }
        case "2" : {
            var birthday = prompt("Ngày sinh");
            document.getElementById("birthday").innerText = "2. Ngày sinh : " + birthday;
            breakl;
        }
        case "3" : {
            let email = prompt(" Địa chỉ Email");
            document.getElementById("email").innerText = "3. Email : " + email;
            breakl;
        }
        case "4" : {
            let adress = prompt("Địa chỉ");
            document.getElementById("adress").innerText = "4. Adress : " + adress;
            breakl;
        }
        case "5" : {
            let customer = prompt(" Loại customer : Diamond, Platinum, Gold, Silver, Member");
            document.getElementById("customer").innerText = "5. Customer : " + customer;
            breakl;
        }
        case "6" : {
            let discount = prompt("% Giảm giá");
            document.getElementById("discount").innerText = "6. Giảm giá : " + discount;
            breakl;
        }
        case "7" : {
            let people = prompt("Số lượng người đi kèm");
            document.getElementById("peoples").innerText = "7. Số người đi kèm : " + people;
            breakl;
        }
        case "8" : {
            let rentdays = prompt("Số ngày thuê");
            document.getElementById("rentdays").innerText = "8. Số ngày thuê : " + rentdays;
            breakl;
        }
        case "9" : {
            let rentservice = prompt("Dịch vụ sử dụng : Villa, House, Room");
            document.getElementById("rentservice").innerText = "9. Sử dụng dịch vụ : " + rentservice;
            breakl;
        }
        case "10" : {
            let rentroom = prompt("Loại phòng thuê : Vip, Business, Normal");
            document.getElementById("rentroom").innerText = "10. Loại phòng thuê : " + rentroom;
            breakl;
        }
        default : {
            let ElementEdit = prompt("Bạn nhập từ 1 - 10 tương ứng với thông tin muốn chỉnh sửa :" + "\n" +
                "1. Name" + "\n"
                + "2. Birthday" + "\n"
                + "3. Email" + "\n"
                + "4. Adress" + "\n"
                + "5. Loại khách" + "\n"
                + "6. Giảm giá %" + "\n"
                + "7. Số người đi cùng" + "\n"
                + "8. Số ngày thuê" + "\n"
                + "9. Dịch vụ" + "\n"
                + "10. Loại phòng" + "\n")
            ;
        }
    }
}

function Tinh() {
   var z = document.getElementById("name").innerText;
   alert(z);

}
