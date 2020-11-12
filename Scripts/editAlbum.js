/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

let albumToEdit = sessionStorage.getItem('albumToEdit');


let currentPhotos = []

let selectedPhotos = []

let warningTimeoutID = null;


window.onload = initial

function initial() {
    albumNameField = document.querySelector("#newAlbumName")
    albumNameField.setAttribute("value", albumToEdit)

    let currentAlbum = null 

    for (let i = 0; i < currentAccount.albums.length && currentAlbum == null; i++) {
        if (currentAccount.albums[i].name == albumToEdit) {
            currentAlbum = currentAccount.albums[i]
        }
    }

    currentPhotos = [...currentAlbum.photos]

    previewUpdater("regular")

}



function previewUpdater(scope){

    let counter = document.querySelector("#previewPhotoCounter")
    let previewBox = document.querySelector("#photosPreview")
    let locationSelector = document.querySelector("#newAlbumLocation")
    let eventSelector = document.querySelector("#newAlbumEvent")
    let dateSelector = document.querySelector("#newAlbumDate")

    counter.innerHTML = currentPhotos.length


    if (scope == "regular") {

        while (previewBox.lastElementChild) {
            previewBox.removeChild(previewBox.lastElementChild);
        }

        for (let i = 0; i < currentPhotos.length; i++) {
            let newDiv = document.createElement("div")
            let newImg = document.createElement("img")
    
            newImg.setAttribute("src", currentPhotos[i].path);
    
            newImg.addEventListener("click", openPhotoViewer)
    
            newDiv.appendChild(newImg)
    
            previewBox.appendChild(newDiv)
        
        }

        selectedPhotos = [...currentPhotos]

    }

    if (scope=="filtered") {
        // remover fotos que estavam lá antes

        while (previewBox.lastElementChild) {
            previewBox.removeChild(previewBox.lastElementChild);
        }

        
        let selectedLocation = locationSelector.options[locationSelector.selectedIndex].text;
        let selectedEvent = eventSelector.options[eventSelector.selectedIndex].text;
        let selectedDate = dateSelector.value

        selectedPhotos = []

        
        for (let i = 0; i < currentPhotos.length; i++) {
            let currentPicture = currentPhotos[i];


            if((selectedLocation == "Localização..." || currentPicture.local == selectedLocation) && 
            (selectedEvent == "Evento..." || currentPicture.event == selectedEvent) && 
            (selectedDate == "" || currentPicture.date == selectedDate)) {
     
                let newDiv = document.createElement("div");
                let newImg = document.createElement("img");
                    
               
                newImg.setAttribute("src", currentPicture.path);
                newImg.addEventListener("click", openPhotoViewer)
            
                newDiv.appendChild(newImg)
                previewBox.appendChild(newDiv)

                selectedPhotos.push(currentPicture)

            
            }
        
        }

        counter.innerHTML = selectedPhotos.length

    }
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

    if (source == "local") {
        for (let i = 0; i < localPhotos.length; i++) {
            currentPhotos.push(localPhotos[i])

        }
        previewUpdater("regular")
    }


    closeImportBox()
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

function removeDuplicates() {
    
    // Alteramos as fotos para um array do tipo [path, Objeto], e o map() apaga os que têm paths repetidos,
    // depois obtemos apenas a parte Objeto com .values() :) magia
    currentPhotos = [...new Map(currentPhotos.map(item => [item.path, item])).values()]
    previewUpdater("regular")
}

function openDeleteWarningBox() {
    let deleteWarningBox = document.getElementById("deleteWarningBox");
    let dimmer = document.getElementById("dimmer")

    deleteWarningBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        deleteWarningBox.style.opacity = "1"
        
    },200)
}

function closeDeleteWarningBox() {
    let deleteWarningBox = document.getElementById("deleteWarningBox");
    let dimmer = document.getElementById("dimmer")

    deleteWarningBox.style.opacity= "0"
    dimmer.style.opacity = "0"
    
    setTimeout(function() {
        deleteWarningBox.style.display = "none"
        dimmer.style.display="none"
        

    },200)
}


function deleteAlbum() {

    let removed = false

    for (let i = 0; i < currentAccount.albums.length && removed == false; i++) {
        if (currentAccount.albums[i].name == albumToEdit) {
            removed = true
            currentAccount.albums.splice(i, 1)
            updateData()
            goBack()

        }
    }

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

function removeWorse() {
    
    for (let i = 0; i < currentPhotos.length; i++) {
        if (currentPhotos[i].flags.includes("bad_quality")) {
            console.log("here", currentPhotos.length)
            currentPhotos.splice(i, 1)
            console.log(currentPhotos.length)
        }

    }

    previewUpdater("regular")

}