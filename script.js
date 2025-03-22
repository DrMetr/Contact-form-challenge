const submit_button = document.querySelector("button");
const fnameInput = document.querySelector("#fname");
const lnameInput = document.querySelector("#lname");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const consentInput = document.querySelector("#consent");
const queryTypeInput = document.querySelectorAll("input[type=radio]");
const toast = document.querySelector(".toast");
const close_toast_button = document.querySelector("#close_toast");

const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validateEmail(emailInput){
    return emailRegExp.test(String(emailInput).toLowerCase());
  }

submit_button.addEventListener("click", (event) => {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("error_state");
        emailInput.nextElementSibling.style.display = "inline";
    } else {
        emailInput.classList.remove("error_state");
        emailInput.nextElementSibling.style.display = "none";
    }

    if (!(queryTypeInput[0].checked || queryTypeInput[1].checked)) {
        document.querySelector("#queryType_error_message").style.display = "inline";
    } else {
        document.querySelector("#queryType_error_message").style.display = "none";
    }

    if (!consentInput.checked) {
        consentInput.nextElementSibling.style.display = "inline";
    } else {
        consentInput.nextElementSibling.style.display = "none";
    }

    let inputs = [fnameInput, lnameInput, messageInput];
    inputs.forEach((item) => {
        if (!item.value) {
            item.classList.add("error_state");
            item.nextElementSibling.style.display = "inline";
        } else {
            item.classList.remove("error_state");
            item.nextElementSibling.style.display = "none";
        }
    });

    let errors = document.querySelectorAll(".error_message");
    for (let error of errors){
        if (error.style.display != "none"){
            return;
        } else {
            if (toast.classList.contains("hide")) {
            toast.classList.replace("hide", "show");
            } else {
                toast.classList.add("show");
            }}}
    

})

close_toast_button.addEventListener("click", (event) => {
    event.preventDefault();
    toast.classList.replace("show", "hide");
})