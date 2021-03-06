/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */

let passwordErrorTimeoutID;
let usernameErrorTimeoutID;
let emailErrorTimeoutID


window.onload = userSettings

function userSettings() {

    updateAvatarView()

    let stgsUserName = document.querySelector("#stgsUserName");

    stgsUserName.innerText = currentAccount.username;

    let stgsEmail = document.querySelector("#stgsEmail");

    stgsEmail.innerText = currentAccount.email;

    if (currentAccount.darkmode == true) {
        document.getElementById("darkModeSwitch").checked = "1"
        // Alteração da variável em si está no login pois este é partilhado por todas as páginas
        var backgroundColor = document.querySelector(":root");
        backgroundColor.style.setProperty("--BACKGROUND1", "rgb(43, 39, 39)");
        
    }

    let avatars = document.getElementsByClassName("avatar")

    for (let i = 0; i < avatars.length; i++) {
        avatars[i].addEventListener("click", toggleSelectClass)
    }

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


    if (newUserName == currentAccount.username) {
        showChangeUserNameErrorMessage("NOVO NOME IGUAL AO ATUAL");
        return false
    }
  
    for (let i=0; i<accountArray.length; i++){
        if (accountArray[i].username == newUserName) {
            showChangeUserNameErrorMessage("NOVO NOME INDISPONÍVEL")
            return false
        }

    }

    if (newUserName != currentAccount.username) {
        return true
    }
}

function showChangeUserNameErrorMessage(arg) {

    if (usernameErrorTimeoutID) {
        clearTimeout(usernameErrorTimeoutID)
    }

    let changeUserNameSubmit = document.getElementById("changeUserNameSubmitButton");

    changeUserNameSubmit.innerText = arg;
    changeUserNameSubmit.style.backgroundColor = "red";

    usernameErrorTimeoutID = setTimeout(function() {

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

    // Verificar se há outro utilizador com o nome desejado



    if (validInput) {
        console.log("here")

        console.log(currentAccount, newUserName)

        currentAccount.username = newUserName;
        updateData(true)
        closeChangeUserNameBox()
        userNameForm.reset()
        showNotification("Nome de utilizador alterado!")
        userSettings()
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

    if (newEmail == currentAccount.email) {
        showChangeEmailErrorMessage("NOVO E-MAIL IGUAL AO ATUAL");

        return false
    }

    for (let i=0; i<accountArray.length; i++){
        if (accountArray[i].email == newEmail) {
            showChangeEmailErrorMessage("NOVO E-MAIL INDISPONÍVEL")

            return false
        }

    }

    if (newEmail != currentAccount.email) {
        return true
    }
}

function showChangeEmailErrorMessage(arg) {

    if (emailErrorTimeoutID) {
        clearTimeout(emailErrorTimeoutID)
    }

    let changeEmailSubmit = document.getElementById("changeEmailSubmitButton");

    changeEmailSubmit.innerText = arg;
    changeEmailSubmit.style.backgroundColor = "red";


    emailErrorTimeoutID = setTimeout(function() {

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

    validInput = validateEmail(newEmail);

    if (validInput) {
        currentAccount.email = newEmail;
        updateData()
        closeChangeEmailBox()
        emailForm.reset()
        showNotification("Email alterado!")
        userSettings()
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
        updateData()
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

function openChangeAvatarBox() {

    if (currentAccount.avatar != "default") {
        let avatars = document.getElementsByClassName("avatar")

        for (let i = 0; i < avatars.length; i++) {
            if (avatars[i].src.includes(currentAccount.avatar)) {
                avatars[i].classList.add("selected")
            }
            
        }
    }

    let changeAvatarBox = document.getElementById("changeAvatarBox");
    let dimmer = document.getElementById("dimmer")

    changeAvatarBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        changeAvatarBox.style.opacity = "1"
        
    },200)
}

function closeChangeAvatarBox() {

    let changeAvatarBox = document.getElementById("changeAvatarBox");
    let dimmer = document.getElementById("dimmer")

    changeAvatarBox.style.opacity= "0";
    dimmer.style.opacity = "0";

    setTimeout(function() {
        changeAvatarBox.style.display = "none"
        dimmer.style.display="none"
        
    },200)
}

function darkMode() {

    var darkModeSwitch = document.getElementById("darkModeSwitch").checked;

    var backgroundColor = document.querySelector(":root");
        
    if(darkModeSwitch){
        backgroundColor.style.setProperty("--BACKGROUND1", "rgb(43, 39, 39)");
        backgroundColor.style.setProperty("--NOTIFICATION", "rgb(26, 23, 23)");
        backgroundColor.style.setProperty("--ALBUMVIEWER", "rgb(29, 28, 28)");
        backgroundColor.style.setProperty("--NEWALBUMNAME", "rgb(255, 255, 255)");
        backgroundColor.style.setProperty("--HELP", "rgb(29, 28, 28)");
        darkModeSwitch.checked = "1";
        currentAccount.darkmode = true;
        updateData()

    } else {
        backgroundColor.style.setProperty("--BACKGROUND1", "rgb(100, 94, 255)");
        backgroundColor.style.setProperty("--NOTIFICATION", "rgb(82, 76, 252)");
        backgroundColor.style.setProperty("--ALBUMVIEWER", "rgb(97, 92, 255, 0.55)");
        backgroundColor.style.setProperty("--NEWALBUMNAME", "rgb(15, 2, 21)");
        backgroundColor.style.setProperty("--HELP", "rgb(51, 61, 221)");
        currentAccount.darkmode = false;
        updateData()
    }

}

function changeAvatarHandler() {

    let selectedAvatar = document.getElementsByClassName("selected")[0]

    let selectedAvatarPath = selectedAvatar.src

    selectedAvatarPath = selectedAvatarPath.substr(selectedAvatarPath.indexOf("Recursos/Avatares/"))

    currentAccount.avatar = selectedAvatarPath

    updateData()

    closeChangeAvatarBox()

    updateAvatarView()

    showNotification("O seu Avatar foi alterado!")
}

function toggleSelectClass() {

    let avatars = document.getElementsByClassName("avatar")

    for (let i = 0; i < avatars.length; i++) {
        avatars[i].classList.remove("selected")
    }

    this.classList.toggle("selected")
}

function updateAvatarView() {

    if (currentAccount.avatar != "default") {
        let avatarBox = document.querySelector("#settingsAvatar")

        avatarBox.src = currentAccount.avatar
    }
}