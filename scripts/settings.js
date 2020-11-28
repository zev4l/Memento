/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */

let passwordErrorTimeoutID;


window.onload = function userSettings() {

    let stgsUserName = document.querySelector("#stgsUserName");

    stgsUserName.innerHTML = currentAccount.username;

    let stgsEmail = document.querySelector("#stgsEmail");

    stgsEmail.innerHTML = currentAccount.email;
}

function initial() {

    if (location.href.includes("settings.html")) {

        menuElementToggle()
        document.getElementById("changePasswordButton").addEventListener("click", openChangePasswordBox);
    }
}

function openChangeUserNameBox() {

    let changeUserNameBox = document.getElementById("changeUserNameBox");
    let dimmer = document.getElementById("dimmer")

    changeUserNameBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        changeUserNameBox.style.opacity = "1"
        
    },200)
}

function closeChangeUserNameBox() {

    let changeUserNameBox = document.getElementById("changeUserNameBox");
    let dimmer = document.getElementById("dimmer")

    changeUserNameBox.style.opacity= "0";
    dimmer.style.opacity = "0";

    setTimeout(function() {
        changeUserNameBox.style.display = "none"
        dimmer.style.display="none"
        
    },200)
}

function validateUserName(newUserName) {

    if (newUserName = currentAccount.username) {
        showChangeUserNameErrorMessage("NOVO NOME DE UTILIZADOR IGUAL AO ATUAL");
        return false
    }

    if (newUserName != currentAccount.username) {
        return true
    }
}

function showChangeUserNameErrorMessage(arg) {

    if (UserNameErrorTimeoutID) {
        clearTimeout(UserNameErrorTimeoutID)
    }

    let changeUserNameSubmit = document.getElementById("changeUserNameSubmitButton");

    changeUserNameSubmit.innerText = arg;
    changeUserNameSubmit.style.backgroundColor = "red";

    UserNameErrorTimeoutID = setTimeout(function() {

        changeUserNameSubmit.innerText = "Confirmar";
        changeUserNameSubmit.style.backgroundColor = "white";

    }, 3000)
}

function changeUserNameHandler() {

    let newUserName;
    let userNameForm = document.forms["changeUserNameForm"];

    let validInput = userNameForm.reportValidity()

    if (!validInput) {
        return 
    }

    newUserName = userNameForm.newUserName.value;

    validInput = validateUserName(newUserName);

    if (validInput) {
        currentAccount.username = newUserName;
        updateAccounts()
        closeChangeUserNameBox()
        userNameForm.reset()
        showNotification("Nome de utilizador alterado!")
    }
}

function openChangeEmailBox() {

    let changeEmailBox = document.getElementById("changeEmailBox");
    let dimmer = document.getElementById("dimmer")

    changeEmailBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        changeEmailBox.style.opacity = "1"
        
    },200)
}

function closeChangeEmailBox() {

    let changeEmailBox = document.getElementById("changeEmailBox");
    let dimmer = document.getElementById("dimmer")

    changeEmailBox.style.opacity= "0";
    dimmer.style.opacity = "0";

    setTimeout(function() {
        changeEmailBox.style.display = "none"
        dimmer.style.display="none"
        
    },200)
}


function validateEmail(newEmail) {

    if (newEmail = currentAccount.email) {
        showChangeEmailErrorMessage("NOVO EMAIL IGUAL AO ATUAL");
        return false
    }

    if (newEmail != currentAccount.email) {
        return true
    }
}

function showChangeEmailErrorMessage(arg) {

    if (EmailErrorTimeoutID) {
        clearTimeout(EmailErrorTimeoutID)
    }

    let changeEmailSubmit = document.getElementById("changeEmailSubmitButton");

    changeEmailSubmit.innerText = arg;
    changeEmailSubmit.style.backgroundColor = "red";

    EmailErrorTimeoutID = setTimeout(function() {

        changeEmailSubmit.innerText = "Confirmar";
        changeEmailSubmit.style.backgroundColor = "white";

    }, 3000)
}

function changeEmailHandler() {

    let newEmail;
    let emailForm = document.forms["changeEmailForm"];

    let validInput = emailForm.reportValidity()

    if (!validInput) {
        return 
    }

    newEmail = emailForm.newEmail.value;

    validInput = validateEmal(newEmal);

    if (validInput) {
        currentAccount.email = newEmail;
        updateAccounts()
        closeChangeEmailBox()
        emailForm.reset()
        showNotification("Email alterado!")
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
        showChangePasswordErrorMessage("PALAVRA-PASSE NOVA IGUAL À ATUAL");
        return false
    }

    if ((newPassword == confirmNewPassword) && (currentPassword != newPassword)) {
        return true
    }
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