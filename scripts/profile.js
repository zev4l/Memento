/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

/* DEFINIÇÃO DE CONSTANTES E VARIÁVEIS GLOBAIS */


window.onload = function profileStats() {

    let userAlbums = currentAccount.albums; 

    let totalProfileAlbuns = document.querySelector("#totalProfileAlbuns");

    totalProfileAlbuns.innerHTML = userAlbums.length;

    let totalProfilePhotos = document.querySelector("#totalProfilePhotos");

    let userPhotos = 0;

    for (let i = 0; i<userAlbums.length; i++) {

        userPhotos += userAlbums[i].photos.length;

        console.log(userPhotos);
    }

    totalProfilePhotos.innerHTML = userPhotos;
}