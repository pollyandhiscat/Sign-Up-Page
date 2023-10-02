const userPasswordDiv = document.getElementById('user_password_container');
const userPasswordConfirmDiv = document.getElementById('user_password_confirm_container');

let userPassword = document.getElementById('user_password');
let userPasswordConfirm = document.getElementById('user_password_confirm');

function passwordsMatch() {

    /* 
    
    Verifies the user password fields match
    upon account sign up.

    */

    password = userPassword.value;
    passwordConfirm = userPasswordConfirm.value;

    if (password == passwordConfirm) {

        return true
    }

    else {

        return false
    }

}


userPasswordConfirm.addEventListener('keyup', () => {

    if (userPasswordConfirm.value.length != 0) {

        let result = passwordsMatch();

        if (result == true) {

            userPassword.setAttribute('style', 'background-color: green;');
            userPasswordConfirm.setAttribute('style', 'background-color: green;');
        }

        else {

            userPassword.setAttribute('style', 'background-color: red;');
            userPasswordConfirm.setAttribute('style', 'background-color: red;');

        }
    }



})