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