/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/*eslint-env es6*/
/*eslint-env browser*/
// Impede alguns erros fáceis de cometer.

function openAlbumViewer(event) {
    let currentAlbumName = event.target.innerText

    let dimmer = document.getElementById("dimmer")
    let userAlbums = currentAccount.albums

    let albumViewer = document.querySelector("#albumViewer")
    let albumViewerSlider = document.querySelector("#albumViewerSlider")
    let albumViewerTitle = document.querySelector("#albumViewerTitle")
    let albumViewerPictureCount = document.querySelector("#albumViewerPictureCount")

    let currentAlbum = null

    


    for (let i = 0; i<userAlbums.length; i++) {
        if (currentAlbumName == userAlbums[i].name) {
            currentAlbum = userAlbums[i]
        }
    }

    if (currentAlbum == null) {
        return
    }

    // PREENCHER ALBUMVIEWER

        // Remover Anteriores
    while (albumViewerSlider.lastElementChild) {
        albumViewerSlider.removeChild(albumViewerSlider.lastElementChild);
    }

    for (let i = 0; i < currentAlbum.photos.length; i++) {

        let currentPicture = currentAlbum.photos[i];

        let newDiv = document.createElement("div");
        let newImg = document.createElement("img");
            

        newImg.setAttribute("src", currentPicture.path);
        newImg.addEventListener("click", openPhotoViewer)
    
        newDiv.appendChild(newImg)
        albumViewerSlider.appendChild(newDiv)
    
    
    }

    // ABRIR ALBUMVIEWER
    dimmer.style.display = "block"
    albumViewer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        albumViewer.style.opacity = "1"
        
        
    },200)

    albumViewerTitle.innerHTML = currentAlbum.name



    albumViewerPictureCount.innerHTML = "(" + currentAlbum.photos.length + " fotografias)"




}

function openPhotoViewer(event) {
    let currentImage = event.target.src
    let dimmer2 = document.getElementById("dimmer2")
    

    let photoViewerImage = document.querySelector("#albumPhotoViewer img")
    let photoViewer = document.querySelector("#albumPhotoViewer")
    photoViewerImage.setAttribute("src", currentImage)

    photoViewer.style.display = "block"

    dimmer2.style.display = "block"



    setTimeout(function() {
        dimmer2.style.opacity = "1"
        photoViewer.style.opacity = "1"
        
        
    },200)
    
}

function closePhotoViewer() {
    let photoViewer = document.querySelector("#albumPhotoViewer")
    let dimmer2 = document.getElementById("dimmer2")

    dimmer2.style.opacity = "0"
    photoViewer.style.opacity = "0"

    setTimeout(function() {

        dimmer2.style.display = "none"
        photoViewer.style.display = "none"
        
        
    },200)
    
}
    


function closeAlbumViewer() {
    let albumViewer = document.querySelector("#albumViewer")
    let dimmer = document.getElementById("dimmer")


    dimmer.style.opacity = "0"
    albumViewer.style.opacity = "0"

    setTimeout(function() {

        dimmer.style.display = "none"
        albumViewer.style.display = "none"
        
        
    },200)
    
}

function fillAlbums() {
    let albumBox = document.querySelector("#containerAlbums")

    currentAlbumCount = albumBox.childElementCount

    for (let i=1; i < currentAlbumCount; i++) {
        albumBox.removeChild(albumBox.lastElementChild)
    }

    for (let i=0; i<currentAccount.albums.length; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class","albumButton")
        newDivText = document.createElement("h4")
        newDivText.innerText = currentAccount.albums[i].name
        newDiv.addEventListener("click", openAlbumViewer)

        let editButton = document.createElement("img")
        editButton.setAttribute("class","editButton")
        editButton.setAttribute("src", "Recursos/editIcon.png")
        editButton.addEventListener("click", function() {

            albumToEdit = sessionStorage.setItem('albumToEdit', currentAccount.albums[i].name);
            location.href = "editAlbum.html"
        })

        let shareButton = document.createElement("img")
        shareButton.setAttribute("class", "shareButton")
        shareButton.setAttribute("src", "Recursos/shareIcon.png")
        shareButton.addEventListener("click", function() {openExportBox(currentAccount.albums[i].name)})
        

        newDiv.appendChild(newDivText)
        newDiv.appendChild(editButton)
        newDiv.appendChild(shareButton)

        albumBox.appendChild(newDiv)
    }
}

function openExportBox(albumName) {
    let exportBox = document.getElementById("exportBox");
    let dimmer = document.getElementById("dimmer")
    let photoCount = exportBox.querySelector("span")
    let currentAlbum = null
    
    for (let i = 0; i<currentAccount.albums.length; i++) {
        if (currentAccount.albums[i].name == albumName) {
            currentAlbum = currentAccount.albums[i]
        }
    }

    photoCount.innerText = currentAlbum.photos.length

    exportBox.style.display = "block";
    dimmer.style.display = "block"

    setTimeout(function() {
        dimmer.style.opacity = "1"
        exportBox.style.opacity = "1"
        
        
    },200)
}

function closeExportBox() {
    let exportBox = document.getElementById("exportBox");
    let dimmer = document.getElementById("dimmer")

    exportBox.style.opacity= "0";
    dimmer.style.opacity = "0";
    
    setTimeout(function() {
        exportBox.style.display = "none"
        dimmer.style.display="none"
        

    },200)
}

function exportHandler(scope) {
    let exportBox = document.querySelector("#exportBox")
    let exportConfirmation = document.querySelector("#exportConfirmation")
    let exportConfirmationImage = document.querySelector("#exportConfirmationImage")


    if (scope == "facebook") {

        for(let i = 0; i < exportBox.children.length; i++) {
            exportBox.children[i].style.display = "none"
        }

        exportBox.style.height = "300px"
        exportConfirmation.style.display = "block"
        exportConfirmationImage.style.display = "block"

        setTimeout(function() {
            location.href = "memento.html"
            
        },2000)



    
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
