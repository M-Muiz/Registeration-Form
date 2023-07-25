let loginBtn = document.querySelector(".login")
let checkInputCheckBox = document.getElementById("checkbox");
checkInputCheckBox.addEventListener("change", ()=>{
    if(checkInputCheckBox.checked){
        loginBtn.disabled = false;
        loginBtn.classList.remove("disable");
    }
    else{
        loginBtn.disabled = true;
        loginBtn.classList.add("disable");
    }
})
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const passToggleBtn = document.getElementById("pass-toggle-btn");

passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = loginPassword.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    loginPassword.type = loginPassword.type === "password" ? "text" : "password";
});

const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

loginBtn.addEventListener("click", ()=>{
    if(loginEmail.value == "" ){
        showError(loginEmail, "Please Enter a Valid Email !")
    }
    if(loginPassword.value == ""){
        showError(loginPassword, "Please Enter a Password !")
    }
    else[
        //...
    ]
})