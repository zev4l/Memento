/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/*eslint-env es6*/
/*eslint-env browser*/
// Impede alguns erros fáceis de cometer.

function openAlbumViewer(event) {
    let currentAlbumName = event.target.innerHTML
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
        newDiv = document.createElement("div")
        newDiv.setAttribute("class","albumButton")
        newDiv.innerHTML = currentAccount.albums[i].name
        newDiv.addEventListener("click", openAlbumViewer)
        albumBox.appendChild(newDiv)
    }

    

}