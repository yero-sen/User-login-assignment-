// User Login

// Variables for HTML Elements
let loginBtnEL = document.getElementById("login-btn");
let userInputEL = document.getElementById("user-input");
let passInputEL = document.getElementById("pass-input");



//Add Event Listener to Button
loginBtnEL.addEventListener("click", login);

function login() {
    
    let userinput = userInputEL.value;
    let passinput = passInputEL.value;

    // Check the input
    if (userinput === "admin" && passinput === "1234") {
        alert("Login Successful");
    } else if (userinput !== "admin") {
        alert("Invalid Username");
    } else if (passinput !== "1234" ) {
        alert("Invalid Password");
    }
}

