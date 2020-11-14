/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */

window.onload = function userSettings() {

    let stgsUsername = document.querySelector("#stgsUserName");

    stgsUsername.innerHTML = currentAccount.username;

    let stgsEmail = document.querySelector("#stgsEmail");

    stgsEmail.innerHTML = currentAccount.email;
}