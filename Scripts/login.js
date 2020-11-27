/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */


const REGISTER_EMAIL = "email"

const REGISTER_USERNAME = "username"

const REGISTER_PASSWORD = "password"

const LOGIN_USERNAME = "username"

const LOGIN_PASSWORD = "password"

let formularioRegister = null

let formularioLogin = null

let errorTimeoutID = null

let currentAccount = JSON.parse(localStorage.getItem("currentAccount")) || null;

let accountArray = JSON.parse(localStorage.getItem("accountArray")) || []; 


class Account {
    constructor(username, password, email) {
        this.username = username,
        this.password = password,
        this.email = email,
        this.albums = []
    }
}

window.onload = initial

function initial() {

    if (location.href.includes("memento.html")) {

        menuElementToggle()
        document.getElementById("loginButton").addEventListener("click", openLoginBox);
        document.getElementById("registerButton").addEventListener("click", openRegisterBox);

    }
}

/**
 * Guarda os dados na localStorage, igualando-os aos dados das variáveis atuais
 */
function updateAccounts() {
    localStorage.setItem("accountArray", JSON.stringify(accountArray))
    localStorage.setItem("currentAccount", JSON.stringify(currentAccount))
}

function updateData() {
    found = false;
    for (let i=0; i<accountArray.length && found==false; i++){
        if (accountArray[i].username == currentAccount.username) {
            found = true;
            accountArray[i] = currentAccount
			updateAccounts()
		}

	}
}

// Funções relativas ao login

function openLoginBox() {

    let loginBox = document.getElementById("loginBox");
    let dimmer = document.getElementById("dimmer")

    loginBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        loginBox.style.opacity = "1"
        
        
    },200)
    
}

function closeLoginBox() {
    let loginBox = document.getElementById("loginBox");
    let dimmer = document.getElementById("dimmer")

    loginBox.style.opacity= "0";
    dimmer.style.opacity = "0";

    setTimeout(function() {
        loginBox.style.display = "none"
        dimmer.style.display="none"
        
    },200)
    
}

function loginHandler() {

    formularioLogin = document.forms["loginForm"]

    let validInput = formularioLogin.reportValidity()

    if (validInput){

        if (accountArray.length == 0) {
            showLoginErrorMessage()
        }

        for (let i = 0; i < accountArray.length; i++) {
            if (accountArray[i].username == formularioLogin.elements[LOGIN_USERNAME].value) {
                if (accountArray[i].password == formularioLogin.elements[LOGIN_PASSWORD].value) {
                    currentAccount = accountArray[i]
                    menuElementToggle()
                    closeLoginBox()
                    updateAccounts()
                    location = location

                    return
                }
            }
        
        }

        showLoginErrorMessage()
        
    }
}

function openRegisterBox() {
    let registerBox = document.getElementById("registerBox");
    let dimmer = document.getElementById("dimmer")

    registerBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        registerBox.style.opacity = "1"
        

    },200)

}

function closeRegisterBox() {
    let registerBox = document.getElementById("registerBox");
    let dimmer = document.getElementById("dimmer")

    registerBox.style.opacity= "0";
    dimmer.style.opacity = "0";
    
    setTimeout(function() {
        registerBox.style.display = "none"
        dimmer.style.display="none"
        

    },200)
}

function registerHandler() {
    formularioRegister = document.forms["registerForm"]

    let validAccount = formularioRegister.reportValidity()

    let used = usedCredentialChecker(formularioRegister.elements[REGISTER_USERNAME].value, 
                          formularioRegister.elements[REGISTER_EMAIL].value)

    if (validAccount && !used) {
        let newAccount = new Account(formularioRegister.elements[REGISTER_USERNAME].value,
                           formularioRegister.elements[REGISTER_PASSWORD].value,
                           formularioRegister.elements[REGISTER_EMAIL].value)
                           
        formularioRegister.reset()
        closeRegisterBox()
        
        accountArray.push(newAccount)

        currentAccount = newAccount

        updateAccounts()

        openRegisterSuccessBox()

        setTimeout(function() {
                      
            location = location

        },3000)


    }


}

// Funções Ajudantes

function usedCredentialChecker(username, email) {
    for(let i=0;i<accountArray.length; i++) {
        if (accountArray[i].username == username) {
            showRegisterErrorMessage("username")
            return true
        }
        if (accountArray[i].email == email) {
            showRegisterErrorMessage("email")
            return true
        }
    }
}

// Avisos

function showLoginErrorMessage() {

    if (errorTimeoutID) {
        clearTimeout(errorTimeoutID)
    }

    let loginSubmitButton = document.getElementById("loginSubmit") 

    loginSubmitButton.innerHTML = "NOME/PASSWORD INCORRETOS"
    loginSubmitButton.style.backgroundColor = "red"

    errorTimeoutID = setTimeout(function() {
        loginSubmitButton.innerHTML = "Entrar"
        loginSubmitButton.style.backgroundColor = "white"
        
    },3000)

}

function showRegisterErrorMessage(reason) {

    if (errorTimeoutID) {
        clearTimeout(errorTimeoutID)
    }

    let registerSubmitButton = document.getElementById("registerSubmit") 

    if (reason == "username"){
        registerSubmitButton.innerHTML = "NOME DE UTILIZADOR INDISPONÍVEL"
    }
    if (reason == "email"){
        registerSubmitButton.innerHTML = "E-MAIL INDISPONÍVEL"
    }
    

    registerSubmitButton.style.backgroundColor = "red"

    errorTimeoutID = setTimeout(function() {
        registerSubmitButton.innerHTML = "Register"
        registerSubmitButton.style.backgroundColor = "white"
        
    },3000)

}

// Funções relativas a elementos estéticos

function menuElementToggle() {


    if (!currentAccount) {
        document.getElementsByClassName("title")[0].style.display ="none"
        document.getElementById("containerAlbums").style.display = "none"
        document.getElementById("logoutButton").style.display = "none"
        document.getElementById("settingsButton").style.display = "none"
        document.getElementById("profileButton").style.display = "none"
        document.getElementById("loginButton").style.display = "block"
        document.getElementById("registerButton").style.display = "block"

        let logo = document.querySelector("#logo")
        
        // Alteração das características do Logo conforme se está logged in ou não

        logo.style.left = "15%"
        logo.style.top = "30%"
        logo.style.width = "20%"

    }

    if (currentAccount) {
        document.getElementById("loginButton").style.display = "none"
        document.getElementById("registerButton").style.display = "none"
        document.getElementsByClassName("title")[0].style.display ="block"
        document.getElementById("containerAlbums").style.display = "grid"
        document.getElementById("logoutButton").style.display = "block"
        document.getElementById("settingsButton").style.display = "block"
        document.getElementById("profileButton").style.display = "block"

        let logo = document.querySelector("#logo")
        
        // Alteração das características do Logo conforme se está logged in ou não

        logo.style.left = "15px"
        logo.style.top = "5px"
        logo.style.width = "10%"

        fillAlbums()
        

    }
}

function signOutHandler(){
    updateData()
    currentAccount = null
    updateAccounts()
    menuElementToggle()

}

function goBack() {
    window.history.back();
}

function openRegisterSuccessBox() {
    let successBox = document.getElementById("registerSuccessBox");
    let dimmer = document.getElementById("dimmer2")

    successBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        successBox.style.opacity = "1"
        
    },200)
}