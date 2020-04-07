
function add() {
    let idElement = document.getElementById("id");
    let nameElement = document.getElementById("name");
    let birthdayElement = document.getElementById("birthday");
    let renteddayElement = document.getElementById("rentedday");
    let emailElement = document.getElementById("email");
    let customer = new Customer(idElement.value, nameElement.value, emailElement.value, birthdayElement.value, renteddayElement.value);
    Furama.add(customer);
    displayTablelist();
    console.log(Furama.getList());

}
function displayTablelist() {
    let tablehtml = "<table>" +
        "<tr><th>ID</th><th>Name</th><th>Email</th><th>Birthday</th><th>Rented day</th><th>Actions</th></tr>";
    let users = Furama.getList();
    // var tableHead = "<table><tr><td>ID</td><td>Name</td><td>Birthday</td><td>Email</td></tr></table>";
    for (let i = 0; i < users.length; i++) {
        let customer = users[i];
        console.log(users[i]);
        tablehtml += "<table><tr>"
            + td(i + 1) + td(customer.name)
            + td(customer.email)
            + td(customer.birthday) + td(customer.rentedday)+td("hahaah")
            + "</tr></table>";
    }
    console.log(tablehtml);
    document.getElementById("dt-more-columns").innerHTML = tablehtml;
    function td(text) {
        return "<td>" + text + "</td>";
    }

}

