const button = document.querySelector("button");
const fnameInput = document.querySelector("#fname");
const lnameInput = document.querySelector("#lname");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const consentInput = document.querySelector("#consent");
const queryTypeInput = document.querySelectorAll("input[type=radio]");

const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validateEmail(emailInput){
    return emailRegExp.test(String(emailInput).toLowerCase());
  }

button.addEventListener("click", (event) => {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("error_state");
        emailInput.nextElementSibling.style.display = "inline";
    } else {
        emailInput.classList.remove("error_state");
        emailInput.nextElementSibling.style.display = "none";
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

})