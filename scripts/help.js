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

function openHelpSelection1() {
    document.getElementById("dropdownContent1").classList.toggle("show");
    document.getElementById("helpViewer1").style.transform = "rotate(180deg)";
}

function openHelpSelection2() {
    document.getElementById("dropdownContent2").classList.toggle("show");
    document.getElementById("helpViewer2").style.transform = "rotate(180deg)";
}

function openHelpSelection3() {
    document.getElementById("dropdownContent3").classList.toggle("show");
    document.getElementById("helpViewer3").style.transform = "rotate(180deg)";
}

function openHelpSelection4() {
    document.getElementById("dropdownContent4").classList.toggle("show");
    document.getElementById("helpViewer4").style.transform = "rotate(180deg)";
}

function openHelpSelection5() {
    document.getElementById("dropdownContent5").classList.toggle("show");
    document.getElementById("helpViewer5").style.transform = "rotate(180deg)";
}

function openHelpSelection6() {
    document.getElementById("dropdownContent6").classList.toggle("show");
    document.getElementById("helpViewer6").style.transform = "rotate(180deg)";
}
