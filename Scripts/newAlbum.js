// Importação das Fotografias



window.onload = inicial

function inicial() {

    fotosLocais = [
        new Photo("Resources/Imagens/0.jpg", [], "Festa de Final de Curso", "27/5/2020", "Casa"),
        new Photo("Resources/Imagens/1.jpg", ["landscape"], "Férias Verão", "28/8/2019", "Brasil"),
        new Photo("Resources/Imagens/2.png", ["bad_quality"], "Festa de Final de Curso", "27/5/20", "Parque das Nações"),
        new Photo("Resources/Imagens/3.jpg", [], "Festa de Final de Curso", "27/5/2020", "Casa"),
        new Photo("Resources/Imagens/4.jpg", [], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
        new Photo("Resources/Imagens/5.jpg", ["bad_quality"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
        new Photo("Resources/Imagens/6.jpg", [], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
        new Photo("Resources/Imagens/7.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
        new Photo("Resources/Imagens/8.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
        new Photo("Resources/Imagens/9.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
        new Photo("Resources/Imagens/10.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
        new Photo("Resources/Imagens/11.jpg", [], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
        new Photo("Resources/Imagens/12.jpg", [], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
        new Photo("Resources/Imagens/13.jpg", ["landscape"], "Passeio Rural", "12/3/2020", "Sintra"),
        new Photo("Resources/Imagens/14.jpg", ["landscape"], "Férias Noruega", "14/2/2020", "Oslo, Noruega"),
        new Photo("Resources/Imagens/15.jpg", [], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
        new Photo("Resources/Imagens/22.jpg", ["landscape"], "Férias Verão", "28/8/2019", "Brasil"),
        new Photo("Resources/Imagens/23.jpg", ["faces"], "Férias Verão", "28/8/2019", "Brasil"),
        new Photo("Resources/Imagens/24.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
        new Photo("Resources/Imagens/28.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
        new Photo("Resources/Imagens/29.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa")
    ]

}

function openImportBox() {
    let importBox = document.getElementById("importBox");
    let dimmer = document.getElementById("dimmer")

    importBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        importBox.style.opacity = "1"
        
        
    },200)
}

function closeImportBox() {
    let importBox = document.getElementById("importBox");
    let dimmer = document.getElementById("dimmer")

    importBox.style.opacity= "0";
    dimmer.style.opacity = "0";
    
    setTimeout(function() {
        importBox.style.display = "none"
        dimmer.style.display="none"
        

    },200)
}