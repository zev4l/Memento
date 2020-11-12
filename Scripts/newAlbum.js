/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */

// Importação das Fotografias



let currentPhotos = []

let selectedPhotos = []

let warningTimeoutID = null;


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
    let removeDuplicatesButton = document.querySelector("#removeDuplicatesButton")



    newAlbumExtraDetails.style.display = "block"
    importButton.style.display = "none"
    removeDuplicatesButton.style.display = "block"

    if (source == "local") {
        for (let i = 0; i < localPhotos.length; i++) {
            currentPhotos.push(localPhotos[i])

        }
        previewUpdater("initial")
    }

    


    closeImportBox()
}




function previewUpdater(scope){

    let counter = document.querySelector("#previewPhotoCounter")
    let previewBox = document.querySelector("#photosPreview")
    let locationSelector = document.querySelector("#newAlbumLocation")
    let eventSelector = document.querySelector("#newAlbumEvent")
    let dateSelector = document.querySelector("#newAlbumDate")

    counter.innerHTML = currentPhotos.length


    if (scope == "initial") {

        fillOptions()
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

    if (scope=="subsequent") {
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

function fillOptions()  {
    let locationSelector = document.querySelector("#newAlbumLocation")
    let eventSelector = document.querySelector("#newAlbumEvent")
    let locations = []
    let events = []

    // Lidar com as localizações

    for (let i = 0; i < currentPhotos.length; i++) {
        if (!locations.includes(currentPhotos[i].local)) {
            locations.push(currentPhotos[i].local)
        }
    }
    
    for (let i = 0; i < locations.length; i++) {
        let newOpt = document.createElement("option")
        newOpt.setAttribute("value", locations[i])
        newOpt.innerHTML = locations[i]
        locationSelector.appendChild(newOpt)
    }

    // Lidar com os eventos

    for (let i = 0; i < currentPhotos.length; i++) {
        if (!events.includes(currentPhotos[i].event)) {
            events.push(currentPhotos[i].event)
        }
    }

    for (let i = 0; i < events.length; i++) {
        let newOpt = document.createElement("option")
        newOpt.setAttribute("value", events[i])
        newOpt.innerHTML = events[i]
        eventSelector.appendChild(newOpt)
    }

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

function saveAlbum() {
    let detailsForm = document.querySelector("#newAlbumDetails form")

    let validInput = detailsForm.reportValidity();
    let albumNameTaken = duplicateAlbumCheck()

    let locationSelector = document.querySelector("#newAlbumLocation")
    let eventSelector = document.querySelector("#newAlbumEvent")
    let dateSelector = document.querySelector("#newAlbumDate")
    let nameInput = document.querySelector("#newAlbumName")

    let selectedLocation = locationSelector.options[locationSelector.selectedIndex].text;
    let selectedEvent = eventSelector.options[eventSelector.selectedIndex].text;
    let selectedDate = dateSelector.value
    let selectedName = nameInput.value



    if (validInput && !albumNameTaken) {

        newAlbum = new Album(selectedName, [...selectedPhotos], selectedLocation, selectedEvent, selectedDate)
    
        currentAccount.albums.push(newAlbum)
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
        if (currentAccount.albums[i].name == selectedName) {

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

function removeDuplicates() {
    
    
    let unique = [...new Map(currentPhotos.map(item => [item.path, item])).values()]
    
    currentPhotos = unique
    previewUpdater("subsequent")
}