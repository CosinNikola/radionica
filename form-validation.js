let f = register;
let formError = document.querySelector("#formError");
let firstnameError = document.querySelector("#firstnameError");
let lastnameError = document.querySelector("#lastnameError");
let emailError = document.querySelector("#emailError");

let firstname = f.firstname.value;
let lastname = f.lastname.value;
let email = f.email.value;
let phone = f.phone.value;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let errorFields = document.querySelectorAll(".error-msg");

let validationMessages = {
    formError: "",
    firstnameError: "",
    lastnameError: "",
    emailError: ""
}


const validateForm = () => {
    if(firstname !== "" && lastname !== "" && email !== "" && phone !== "") {
        validationMessages.formError = "";
        if(firstname.length < 3) {
            validationMessages.firstnameError = "Ime mora sadrzati minimum 3 karaktera!";
            firstnameError.style.display = "block";
        }

        else if(lastname.length < 3){
            validationMessages.lastnameError = "Prezime mora sadrzati minimum 3 karaktera!";
            lastnameError.style.display = "block";
        } 

        else if(!email.match(emailRegex)) {
            validationMessages.emailError = "Email mora sadrzati znak @!";
            emailError.style.display = "block";
        }
        else {
            for(let field of errorFields) {
                field.style.display = "none";
            }
            validationMessages.formError = "";
            validationMessages.firstnameError = "";
            validationMessages.lastnameError = "";
            validationMessages.emailError = "";
            alert("Registracija uspesna!");
            console.log(`${firstname}, ${lastname}, ${email}, ${phone} `);
        }
    }
    else {
        validationMessages.formError = "Sva polja moraju biti popunjena!";
        formError.style.display = "block";
    }
    formError.innerHTML = validationMessages.formError;
    firstnameError.innerHTML = validationMessages.firstnameError;
    lastnameError.innerHTML = validationMessages.lastnameError;
    emailError.innerHTML = validationMessages.emailError;
}

register.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
}) 