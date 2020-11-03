/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

class Account {
    constructor(username, password, email, gender, ageGroup, stats, albuns) {
        this.username = username,
        this.password = password,
        this.email = email,
        this.gender = gender,
        this.ageGroup = ageGroup,
        this.stats = stats,
        this.albuns = albums
    }
}

/**
 * Guarda os dados na localStorage, igualando-os aos dados das variáveis atuais
 */
function updateAccounts() {
    localStorage.setItem("accountArray", JSON.stringify(accountArray))
    localStorage.setItem("currentAccount", JSON.stringify(currentAccount))
}