/* FCUL Interação com Computadores
53469, Pedro Luís, PL12, Grupo 23
54975, Miguel Lages, PL12, Grupo 23
55373, José Almeida, PL12, Grupo 23 */

function openHelpBox() {

    let helpBox = document.getElementById("helpBox");
    let dimmer = document.getElementById("dimmer");

    helpBox.style.display = "block";
    dimmer.style.display = "block";

    setTimeout(function() {
        dimmer.style.opacity = "1";
        helpBox.style.opacity = "1";
        
    },200)
    
}

function closeHelpBox() {

    let helpBox = document.getElementById("helpBox");
    let dimmer = document.getElementById("dimmer");

    helpBox.style.opacity= "0";
    dimmer.style.opacity = "0";

    setTimeout(function() {
        helpBox.style.display = "none";
        dimmer.style.display="none";
        
    },200)
}

function toggleHelpSection(arg) {

    let dropdownContent = document.querySelector(`#dropdownContent${arg}`)
    let helpViewer = document.querySelector(`#helpViewer${arg}`)

    dropdownContent.classList.toggle("show");

    if (helpViewer.style.transform != "rotate(180deg)") {
        helpViewer.style.transform = "rotate(180deg)";
    }
    else {
        helpViewer.style.transform = "rotate(0deg)";
    }
        
}
