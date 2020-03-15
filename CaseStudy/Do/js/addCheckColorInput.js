function emailColor() {
    let email = document.getElementById('email');
    if (email.value !== "") {
        check_Email(email.value);
        if (email_check === 1) {
            document.getElementById('email').style.backgroundColor = '#66bb6a';
        } else if (email_check === 0) {
            document.getElementById('email').style.backgroundColor = '#ff5252';
        }
    } else {
        document.getElementById('email').style.backgroundColor = 'white';
    }
}

function nameColor() {
    let name = document.getElementById('name');
        if (name.value !== null) {
            if (name.value === "") {
                document.getElementById('name').style.backgroundColor = '#ff5252';
            } else {

                document.getElementById('name').style.backgroundColor = '#66bb6a';
            }
        }
    }


