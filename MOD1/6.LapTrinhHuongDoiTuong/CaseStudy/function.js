function displayTablelist() {
    let tablehtml = "";
    // var tableHead = "<table><tr><td>ID</td><td>Name</td><td>Birthday</td><td>Email</td></tr></table>";
    for (let i = 0; i < Furama.list.length; i++) {
        let customer = Furama.list[i];
        tablehtml += "<table><tr>"
            + td(i + 1) + td(customer.name)
            + td(customer.birthday)
            + td(customer.email)
            + "</tr></table>";
        document.getElementById("tableList").innerHTML = tablehtml;

    }

    function td(text) {
        return "<td>" + text + "</td>";
    }
}