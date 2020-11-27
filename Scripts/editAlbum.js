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

        actionToggler()

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

    if (source == "googleDrive")
        for (let i = 0; i < googleDrivePhotos.length; i++) {
            currentPhotos.push(googleDrivePhotos[i])

        }
        previewUpdater("regular")


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

function removeDuplicatesHandler() {

    let photoCount = photoCounter("duplicates")

    let message;

    if (photoCount > 1) {
        message = `Serão removidas ${photoCount} fotografias. Deseja continuar?`
    }
    else {
        message = `Será removida ${photoCount} fotografia. Deseja continuar?`
    }

    openConfirmationBox(message, "Sim", "Não", removeDuplicates)
}

function removeDuplicates() {
    
    // Alteramos as fotos para um array do tipo [path, Objeto], e o map() apaga os que têm paths repetidos,
    // depois obtemos apenas a parte Objeto com .values() :) magia
    currentPhotos = [...new Map(currentPhotos.map(item => [item.path, item])).values()]
    previewUpdater("regular")
    closeConfirmationBox()
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

function removeWorseHandler() {
    let photoCount = photoCounter("bad_quality")

    let message;

    if (photoCount > 1) {
        message = `Serão removidas ${photoCount} fotografias. Deseja continuar?`
    }
    else {
        message = `Será removida ${photoCount} fotografia. Deseja continuar?`
    }

    openConfirmationBox(message, "Sim", "Não", removeWorse)
}

function removeWorse() {
    
    for (let i = 0; i < currentPhotos.length; i++) {
        if (currentPhotos[i].flags.includes("bad_quality")) {
            currentPhotos.splice(i, 1)
        }

    }

    previewUpdater("regular")
    closeConfirmationBox()

}

function saveAlbum() {
    let detailsForm = document.querySelector("#newAlbumDetails form")

    let validInput = detailsForm.reportValidity();
    let albumNameTaken = duplicateAlbumCheck()

    // let locationSelector = document.querySelector("#newAlbumLocation")
    // let eventSelector = document.querySelector("#newAlbumEvent")
    // let dateSelector = document.querySelector("#newAlbumDate")
    let nameInput = document.querySelector("#newAlbumName")

    // let selectedLocation = locationSelector.options[locationSelector.selectedIndex].text;
    // let selectedEvent = eventSelector.options[eventSelector.selectedIndex].text;
    // let selectedDate = dateSelector.value
    let selectedName = nameInput.value



    if (validInput && !albumNameTaken) {

        for (let i = 0; i < currentAccount.albums.length; i++) {
            if (currentAccount.albums[i].name == albumToEdit) {
                currentAlbum = currentAccount.albums[i]
                currentAlbum.name = selectedName
                currentAlbum.photos = []
                currentAlbum.photos = [...selectedPhotos]
            }
        }

        updateData()
        openSuccessBox()

        setTimeout(function() {
            location.href = "memento.html"
            
        },2000)
    }


}

function duplicateAlbumCheck() {

    let selectedName = document.querySelector("#newAlbumName").value

    let isUsed = false

    for (let i = 0; i<currentAccount.albums.length; i++) {
        if (currentAccount.albums[i].name == selectedName && currentAccount.albums[i].name != albumToEdit) {

            isUsed = true;
        } 
    }

    if (isUsed) {

        if (warningTimeoutID) {
            clearTimeout(warningTimeoutID)
        }

        let warningBox = document.querySelector("#warningBox")

        warningBox.style.opacity = "1"

        warningBox.style.height = "80px"

    
        warningTimeoutID = setTimeout(function() {
            
            warningBox.style.opacity = "0"
            warningBox.style.height = "0px"
            
            
        },3000)
    }

    return isUsed;

}

function openSuccessBox() {
    let successBox = document.getElementById("successBox");
    let dimmer = document.getElementById("dimmer")

    successBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        successBox.style.opacity = "1"
        
        
    },200)
}

function photoCounter(scope) {



    if (scope == "bad_quality") {

        let counter = 0

        for (let i = 0; i < selectedPhotos.length; i++) {
            if (selectedPhotos[i].flags.includes("bad_quality")) {
                counter ++
            }
        }

        
        return counter
    }

    if (scope == "duplicates") {
        let unique = [...new Map(currentPhotos.map(item => [item.path, item])).values()]
        return currentPhotos.length - unique.length 
    }

}

function actionToggler() {

    console.trace()

    let duplicatesButton = document.querySelector("#editRemoveDuplicatesButton")
    let badQualityButton = document.querySelector("#removeWorse")

    if (photoCounter("duplicates") == 0) {
        duplicatesButton.style.backgroundColor = "grey";
        duplicatesButton.removeEventListener("click", removeDuplicatesHandler)
        duplicatesButton.setAttribute("onclick", "")
        duplicatesButton.style.cursor = "default"
        
    }
    else {
        duplicatesButton.style.backgroundColor = "rgba(0,0,0,0.2)";
        duplicatesButton.addEventListener("click",removeDuplicatesHandler)
        duplicatesButton.style.cursor = "pointer"
    }

    if (photoCounter("bad_quality") == 0) {
        badQualityButton.style.backgroundColor = "grey";
        badQualityButton.removeEventListener("click", removeWorseHandler)
        badQualityButton.setAttribute("onclick", "")
        badQualityButton.style.cursor = "default"
        
    }
    else {
        badQualityButton.style.backgroundColor = "rgba(0,0,0,0.2)";
        badQualityButton.addEventListener("click",removeWorseHandler)
        badQualityButton.style.cursor = "pointer"
    }
    
}


function openConfirmationBox(text, button1Text, button2Text, button1Function) {
    let confirmationBox = document.querySelector("#confirmationBox")
    let confirmationText = confirmationBox.querySelector("h1")
    let button1 = document.querySelector("#confirmationButton1")
    let button2 = document.querySelector("#confirmationButton2")
    let dimmer = document.getElementById("dimmer")

    confirmationText.innerText = text
    button1.innerText = button1Text
    button2.innerText = button2Text
    button1.addEventListener("click", button1Function)
    button2.addEventListener("click", closeConfirmationBox)

    confirmationBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        confirmationBox.style.opacity = "1"
        
        
    },200)
}   

function closeConfirmationBox() {
    let confirmationBox = document.querySelector("#confirmationBox")
    let dimmer = document.getElementById("dimmer")

    confirmationBox.style.opacity= "0";
    dimmer.style.opacity = "0";
    
    setTimeout(function() {
        confirmationBox.style.display = "none"
        dimmer.style.display="none"
        

    },200)
}