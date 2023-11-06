const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirmPassword");
const errorMessage = document.querySelector(".form-sign-up");

passwordElement.addEventListener("input", validatePasswordVal);
confirmPasswordElement.addEventListener("input", validateConfirmPasswordVal);

let passwordVal = null;
let confirmPasswordVal = null;
let match = false;
let errorBuilt = false;

function validatePasswordVal(e) {
    passwordVal = e.target.value;

    if(confirmPasswordVal != null && passwordVal != confirmPasswordVal) {
        match = false;

        if (errorBuilt == false) {
            errorBuilt = true
            let div = document.createElement("div");
            div.setAttribute('class', 'errorMessage')
            div.textContent = "*Passwords do not match"
            
            errorMessage.append(div)
        }
    }
    else if (passwordVal == confirmPasswordVal) {
        match = true;

        if (errorBuilt == true) {
            let div = document.querySelector(".errorMessage");
            errorMessage.removeChild(div);

            let inputFields = document.querySelectorAll(".password");
            inputFields.forEach(field => {
                field.classList.remove("fieldError");
            })

            errorBuilt = false;
        }
    }
}

function validateConfirmPasswordVal(e) {
    confirmPasswordVal = e.target.value;

    if(passwordVal != e.target.value) {
        match = false;

        if (errorBuilt == false) {
            errorBuilt = true;

            let div = document.createElement("div");
            div.setAttribute('class', 'errorMessage');
            div.textContent = "*Passwords do not match";
            errorMessage.append(div);

            let inputFields = document.querySelectorAll(".password");
            inputFields.forEach(field => {
                field.classList.add('class', 'fieldError');
            })
        }
    }
    else {
        match = true;

        if (errorBuilt == true) {
            let div = document.querySelector(".errorMessage");
            errorMessage.removeChild(div);

            let inputFields = document.querySelectorAll(".password");
            inputFields.forEach(field => {
                field.classList.remove("fieldError");
            })
            errorBuilt = false;
        }
    }
}

function validateForm() {
    if(!match) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
