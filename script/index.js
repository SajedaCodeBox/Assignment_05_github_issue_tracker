// For Login Interface
const getValueFromInput = (id1, id2) => {
    const username_input = document.getElementById(id1);
    const username_value = username_input.value;
    const password_input = document.getElementById(id2);
    const password_value = password_input.value;

    if (username_value == 'admin' && password_value == 'admin123') {

        alert("login Successfull");

        window.location.assign("./home.html");
    }
    else {
        alert("login Failed")
        return;
    }
    return (username_value, password_value);
    }