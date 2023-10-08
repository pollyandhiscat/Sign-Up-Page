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

[userPassword, userPasswordConfirm].forEach(item => {

    item.addEventListener('keyup', () => {

        if (item.value.length != 0) {
    
            let result = passwordsMatch();
            
            // Passwords do not match.
            if (result == false) {
    
                userPassword.setAttribute('style', 'background-color: rgb(181, 45, 45);');
                userPasswordConfirm.setAttribute('style', 'background-color: rgb(181, 45, 45);');
            }
            
            // Passwords match.
            else {
    
    
                userPassword.setAttribute('style', 'background-color: rgb(26, 30, 29);');
                userPasswordConfirm.setAttribute('style', 'background-color: rgb(26, 30, 29);');
    
            }
    
        }

        // Both fields empty.
        else {

            userPassword.setAttribute('style', 'background-color: rgb(26, 30, 29);');
            userPasswordConfirm.setAttribute('style', 'background-color: rgb(26, 30, 29);');

        }
    
    })
})