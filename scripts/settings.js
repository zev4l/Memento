/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */

let passwordErrorTimeoutID;


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

function validatePassword(currentPassword, newPassword, confirmNewPassword) {

    if (currentPassword != currentAccount.password) {
        showChangePasswordErrorMessage("PALAVRA-PASSE ATUAL ERRADA");
        return false
    }

    if (newPassword != confirmNewPassword) {
        showChangePasswordErrorMessage("PALAVRAS-PASSE NÃO COINCIDEM");
        return false
    }

    if (newPassword == currentPassword) {
        showChangePasswordErrorMessage("PALAVRA-PASSE NOVA IGUAL À ANTIGA");
        return false
    }

    if ((newPassword == confirmNewPassword) && (currentPassword != newPassword)) {
        return true
    }

    console.log("here")
}

function showChangePasswordErrorMessage(arg) {

    if (passwordErrorTimeoutID) {
        clearTimeout(passwordErrorTimeoutID)
    }

    let changePasswordSubmitButton = document.getElementById("changePasswordSubmit");

    changePasswordSubmitButton.innerText = arg;
    changePasswordSubmitButton.style.backgroundColor = "red";

    passwordErrorTimeoutID = setTimeout(function() {

        changePasswordSubmitButton.innerText = "Confirmar";
        changePasswordSubmitButton.style.backgroundColor = "white";

    }, 3000)
}

function changePasswordHandler() {

    let currentPassword;
    let newPassword;
    let confirmNewPassword;
    let passwordForm = document.forms["changePasswordForm"]

    let validInput = passwordForm.reportValidity()

    if (!validInput) {
        return 
    }
    
    currentPassword = passwordForm.currentPassword.value;
    newPassword = passwordForm.newPassword.value;
    confirmNewPassword = passwordForm.confirmNewPassword.value;

    console.log(currentPassword, newPassword, confirmNewPassword)

    validInput = validatePassword(currentPassword, newPassword, confirmNewPassword);

    if (validInput) {
        currentAccount.password = newPassword;
        updateAccounts()
        closeChangePasswordBox()
        passwordForm.reset()
        showNotification("Palava-passe alterada!")
    }

}

function showNotification(text) {
    let notificationBox = document.querySelector("#notificationBox")
    let notificationText = notificationBox.querySelector("h2")

    notificationText.innerText = text

    notificationBox.style.opacity = "1"

    notificationBox.style.height = "100px"


    notificationTimeoutID = setTimeout(function() {
        
        notificationBox.style.opacity = "0"
        notificationBox.style.height = "0px"
        
        
    },3000)
}