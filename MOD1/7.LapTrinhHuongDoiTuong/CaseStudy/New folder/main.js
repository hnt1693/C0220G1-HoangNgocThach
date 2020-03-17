
function add() {
    let idElement = document.getElementById("id");
    let nameElement = document.getElementById("name");
    let birthdayElement = document.getElementById("birthday");
    let emailElement = document.getElementById("email");
    let customer = new Customer(idElement.value, nameElement.value, birthdayElement.value, emailElement.value);
    Furama.add(customer);
    displayTablelist();
    console.log(Furama.getList());

}
function displayTablelist() {
    let tablehtml = "<table>" +
        "<tr><th>ID</th><th>Name</th><th>Gender</th><th>Birthday</th><th>Actions</th></tr>";
    let users = Furama.getList();
    // var tableHead = "<table><tr><td>ID</td><td>Name</td><td>Birthday</td><td>Email</td></tr></table>";
    for (let i = 0; i < users.length; i++) {
        let customer = users[i];
        console.log(users[i]);
        tablehtml += "<table><tr>"
            + td(i + 1) + td(customer.name)
            + td(customer.birthday)
            + td(customer.email) + td('hahah')
            + "</tr></table>";
    }
    console.log(tablehtml);
    document.getElementById("dt-more-columns").innerHTML = tablehtml;
    function td(text) {
        return "<td>" + text + "</td>";
    }

}

$('#dt-more-columns').mdbEditor({
    modalEditor: true,
    headerLength: 7,
});
$('.dataTables_length').addClass('bs-select');
$('#your-table-id').mdbEditor({
    headerLength: 6,
    evenTextColor: '#000',
    oddTextColor: '#000',
    bgEvenColor: '',
    bgOddColor: '',
    thText: '',
    thBg: '',
    modalEditor: false,
    bubbleEditor: false,
    contentEditor: false,
    rowEditor: false
});
