let f = register;
let formError = document.querySelector("#formError");
let firstnameError = document.querySelector("#firstnameError");
let lastnameError = document.querySelector("#lastnameError");
let emailError = document.querySelector("#emailError");

let errorFields = document.querySelectorAll(".error-msg");

let validationMessages = {
    formError: "",
    firstnameError: "",
    lastnameError: "",
    emailError: ""
}


const validateForm = () => {
    if(f.firstname.value !== "" && f.lastname.value !== "" && f.email.value !== "") {
        if(f.firstname.value.length < 3) {
            validationMessages.firstnameError = "Ime mora sadrzati minimum 3 karaktera!";
            firstnameError.style.display = "block";
        }

        else if(f.lastname.value.length < 3){
            validationMessages.lastnameError = "Prezime mora sadrzati minimum 3 karaktera!";
            lastnameError.style.display = "block";
        } 

        else if(!f.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
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