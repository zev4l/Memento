// Importação das Fotografias



window.onload = inicial

let localPhotos = [
    new Photo("Recursos/Imagens/0.jpg", [], "Festa de Final de Curso", "27/5/2020", "Casa"),
    new Photo("Recursos/Imagens/1.jpg", ["landscape"], "Férias Verão", "28/8/2019", "Brasil"),
    new Photo("Recursos/Imagens/2.png", ["bad_quality"], "Festa de Final de Curso", "27/5/20", "Parque das Nações"),
    new Photo("Recursos/Imagens/3.jpg", [], "Festa de Final de Curso", "27/5/2020", "Casa"),
    new Photo("Recursos/Imagens/4.jpg", [], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
    new Photo("Recursos/Imagens/5.jpg", ["bad_quality"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
    new Photo("Recursos/Imagens/6.jpg", [], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/7.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
    new Photo("Recursos/Imagens/8.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
    new Photo("Recursos/Imagens/9.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
    new Photo("Recursos/Imagens/10.jpg", ["faces", "duplicate"], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
    new Photo("Recursos/Imagens/11.jpg", [], "Festa de Final de Curso", "27/5/2020", "Parque das Nações"),
    new Photo("Recursos/Imagens/12.jpg", [], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/13.jpg", ["landscape"], "Passeio Rural", "12/3/2020", "Sintra"),
    new Photo("Recursos/Imagens/14.jpg", ["landscape"], "Férias Noruega", "14/2/2020", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/15.jpg", [], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/22.jpg", ["landscape"], "Férias Verão", "28/8/2019", "Brasil"),
    new Photo("Recursos/Imagens/23.jpg", ["faces"], "Férias Verão", "28/8/2019", "Brasil"),
    new Photo("Recursos/Imagens/24.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/28.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/29.jpg", ["faces"], "Festa de Final de Curso", "27/5/2020", "Universidade de Lisboa")
]

let currentPhotos = []



function inicial() {


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

function importHandler(source) {
    let importButton = document.querySelector("#importButton")
    let newAlbumExtraDetails = document.querySelector("#newAlbumExtraDetails")



    newAlbumExtraDetails.style.display = "block"
    importButton.style.display = "none"

    if (source == "local") {
        for (let i = 0; i < localPhotos.length; i++) {
            currentPhotos.push(localPhotos[i])

        }
        previewUpdater()
    }

    


    closeImportBox()
}




function previewUpdater(){

    let counter = document.querySelector("#previewPhotoCounter")
    
    counter.innerHTML = currentPhotos.length

    for (let i = 0; i < currentPhotos.length; i++) {
        let newDiv = document.createElement("div")
        let newImg = document.createElement("img")
        let previewBox = document.querySelector("#photosPreview")

        
        newImg.setAttribute("src", currentPhotos[i].path);

        newImg.addEventListener("click", openPhotoViewer)

        newDiv.appendChild(newImg)



        previewBox.appendChild(newDiv)
        
    }

    // TODO: DO NOT FORGET: Select field options have to be filled based on events/areas available from pictures
}


function openPhotoViewer(event) {
    let currentImage = event.target.src
    let dimmer = document.getElementById("dimmer")
    

    let photoViewerImage = document.querySelector("#photoViewer img")
    let photoViewer = document.querySelector("#photoViewer")
    photoViewerImage.setAttribute("src", currentImage)

    dimmer.style.display = "block"
    photoViewer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        photoViewer.style.opacity = "1"
        
        
    },200)
    
}

function closePhotoViewer() {
    let photoViewer = document.querySelector("#photoViewer")
    let dimmer = document.getElementById("dimmer")


    dimmer.style.opacity = "0"
    photoViewer.style.opacity = "0"

    setTimeout(function() {

        dimmer.style.display = "none"
        photoViewer.style.display = "none"
        
        
    },200)
    
}

function currentPhotosTuner() {
    // TODO: get form info and use it with a for cycle to tune pictures based on Photo.event, Photo., too sleepy :/
}

function goBack() {
    window.history.back();
  }