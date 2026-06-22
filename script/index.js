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


// For home page
// step :01
// for button color changeing
   const togglebtn = (id) => {
    const allbtn = document.getElementById ('all');
    const openbtn = document.getElementById ('open');
    const closedbtn = document.getElementById ('closed');
    allbtn.classList.remove('text-white', 'btn-primary');
    openbtn.classList.remove('text-white', 'btn-primary');
    closedbtn.classList.remove('text-white', 'btn-primary');
    
    const selected = document.getElementById (id);
    selected.classList.add('text-white', 'btn-primary');


   }