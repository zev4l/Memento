/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */

window.onload = function userSettings() {

    let stgsUsername = document.querySelector("#stgsUsername");

    stgsUsername.innerHTML = currentAccount.username;

    let stgsEmail = document.querySelector("#stgsEmail");

    stgsEmail.innerHTML = currentAccount.email;
}

function initial() {

    if (location.href.includes("settings.html")) {

        menuElementToggle()
        document.getElementById("changePasswordButton").addEventListener("click", openChangePasswordBox);
    }
}

function openChangePasswordBox() {

    let changePasswordBox = document.getElementById("changePasswordBox");
    let dimmer = document.getElementById("dimmer")

    changePasswordBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        changePasswordBox.style.opacity = "1"
        
    },200)
}

function closeChangePasswordBox() {
    let changePasswordBox = document.getElementById("changePasswordBox");
    let dimmer = document.getElementById("dimmer")

    changePasswordBox.style.opacity= "0";
    dimmer.style.opacity = "0";

    setTimeout(function() {
        changePasswordBox.style.display = "none"
        dimmer.style.display="none"
        
    },200)
}

function validatePassword() {

    let currentPassword;
    let newPassword;
    let confirmNewPassword;

    currentPassword = document.getElementsByName("currentPassword");
    newPassword = document.getElementsByName("newPassword");
    confirmNewPassword = document.getElementsByName("confirmNewPassword");

    if (currentPassword != currentAccount.password) {
        showChangePasswordErrorMessage();
    }

}

function showChangePasswordErrorMessage() {

    let changePasswordSubmitButton = document.getElementById("changePasswordSubmit");

    changePasswordSubmitButton.innerHTML = "PALAVRA-PASSE INCORRETA";
    changePasswordSubmitButton.style.backgroundColor = "red";

}