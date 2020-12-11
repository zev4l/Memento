/* Grupo: 23, Número: 55373, Nome: José Almeida, PL: 12 /
/ Grupo: 23, Número: 54975, Nome: Miguel Lages, PL: 12 /
/ Grupo: 23, Número: 53469, Nome: Pedro Luís, PL: 12 */

class Album {
    constructor(name, photos, local, event, date) {
        this.name = name,
        this.photos = photos,
        this.local = local,
        this.event = event,
        this.date = date

    }
}

class Photo {
    // Flags podem ser tipo "duplicate, badQuality"
    constructor(path, flags, event, date, local) {
        this.path = path,
        this.flags = flags,
        this.event = event,
        this.date = date, // Data no formato YYYY-MM-DD
        this.local = local
    }
}

let localPhotos = [
    new Photo("Recursos/Imagens/Local/0.jpg", [], "Festa de Final de Curso", "2020-05-27", "Casa"),
    new Photo("Recursos/Imagens/Local/1.jpg", [], "Férias Verão", "2019-08-28", "Brasil"),
    new Photo("Recursos/Imagens/Local/2.png", ["bad_quality"], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/3.jpg", [], "Festa de Final de Curso", "2020-05-27", "Casa"),
    new Photo("Recursos/Imagens/Local/4.jpg", [], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/5.jpg", ["bad_quality"], "Festa de Final de Curso", "2020-05-25", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/6.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/7.jpg", [], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/8.jpg", [], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/9.jpg", [], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/11.jpg", [], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/12.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/13.jpg", [], "Passeio Rural", "2020-03-12", "Sintra"),
    new Photo("Recursos/Imagens/Local/13.jpg", [], "Passeio Rural", "2020-03-12", "Sintra"),  
    new Photo("Recursos/Imagens/Local/15.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/16.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/17.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/18.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/19.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/20.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/21.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),    
    new Photo("Recursos/Imagens/Local/22.jpg", [], "Férias Verão", "2019-08-28", "Brasil"),
    new Photo("Recursos/Imagens/Local/23.jpg", [], "Férias Verão", "2019-08-28", "Brasil"),
    new Photo("Recursos/Imagens/Local/32.jpg", [], "Férias Verão", "2020-07-24", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/33.jpg", [], "Festa de Final de Curso", "2020-05-28", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/34.jpg", [], "Férias Verão", "2020-07-25", "Brasil"),
    new Photo("Recursos/Imagens/Local/34.jpg", [], "Férias Verão", "2020-07-25", "Brasil"),
    new Photo("Recursos/Imagens/Local/35.jpg", [], "Férias Verão", "2020-07-25", "Brasil"),
    new Photo("Recursos/Imagens/Local/36.jpg", [], "Férias Verão", "2020-07-24", "Brasil"),
    new Photo("Recursos/Imagens/Local/37.jpg", [], "Férias Verão", "2020-07-24", "Brasil"),
    new Photo("Recursos/Imagens/Local/38.jpg", [], "Férias Verão", "2020-07-24", "Brasil"),
    new Photo("Recursos/Imagens/Local/39.jpg", [], "Férias Verão", "2020-07-25", "Brasil"),
    new Photo("Recursos/Imagens/Local/47.jpg", [], "Passeio Rural", "2020-03-12", "Sintra"),
    new Photo("Recursos/Imagens/Local/48.jpg", ["bad_quality"], "Passeio Rural", "2020-03-12", "Sintra"),
    new Photo("Recursos/Imagens/Local/49.jpg", ["bad_quality"], "Palácio da Pena", "2020-03-12", "Sintra"),
    new Photo("Recursos/Imagens/Local/50.jpg", [], "Passeio Rural", "2020-03-12", "Sintra"),
    new Photo("Recursos/Imagens/Local/50.jpg", [], "Passeio Rural", "2020-03-12", "Sintra"),
    new Photo("Recursos/Imagens/Local/51.jpg", [], "Palácio da Pena", "2020-03-12", "Sintra")
]

let googleDrivePhotos = [
    new Photo("Recursos/Imagens/googleDrive/0.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/1.jpg", ["bad_quality"], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/2.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/3.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/4.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/5.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/6.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/7.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/8.jpg", ["bad_quality"], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/9.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/11.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/12.jpg", ["bad_quality"], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/13.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/14.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/15.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/16.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/17.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/18.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/googleDrive/19.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/20.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/21.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/22.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/23.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/24.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/25.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/25.jpg", [], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/26.jpg", ["bad_quality"], "Viagem a Tóquio", "2019-11-12", "Tóquio"),
    new Photo("Recursos/Imagens/googleDrive/27.jpg", [], "Final da Taça", "2018-06-03", "Jamor"),
    new Photo("Recursos/Imagens/googleDrive/28.jpg", [], "Final da Taça", "2018-06-03", "Jamor"),
    new Photo("Recursos/Imagens/googleDrive/29.jpg", [], "Final da Taça", "2018-06-03", "Jamor"),
    new Photo("Recursos/Imagens/googleDrive/30.jpg", [], "Final da Taça", "2018-06-03", "Jamor"),
    new Photo("Recursos/Imagens/googleDrive/31.jpg", [], "Final da Taça", "2018-06-03", "Jamor"),
    new Photo("Recursos/Imagens/googleDrive/32.jpg", ["bad_quality"], "Final da Taça", "2018-06-03", "Jamor")
]

let oneDrivePhotos = [
    new Photo("Recursos/Imagens/oneDrive/1.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/2.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/3.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/4.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/5.jpg", ["bad_quality"], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/6.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/7.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/8.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/9.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/10.jpg", [], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/oneDrive/11.jpg", [], "Oceanário", "2020-10-19", "Lisboa"),
    new Photo("Recursos/Imagens/oneDrive/12.jpg", [], "Oceanário", "2020-10-19", "Lisboa"),
    new Photo("Recursos/Imagens/oneDrive/13.jpg", [], "Oceanário", "2020-10-19", "Lisboa"),
    new Photo("Recursos/Imagens/oneDrive/14.jpg", [], "Oceanário", "2020-10-19", "Lisboa"),
    new Photo("Recursos/Imagens/oneDrive/15.jpg", [], "Oceanário", "2020-10-19", "Lisboa"),
    new Photo("Recursos/Imagens/oneDrive/15.jpg", [], "Oceanário", "2020-10-19", "Lisboa"),
    new Photo("Recursos/Imagens/oneDrive/16.jpg", [], "Oceanário", "2020-10-19", "Lisboa"),
]

let dropboxPhotos = [
    new Photo("Recursos/Imagens/Dropbox/1.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/2.png", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/3.png", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/4.png", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/5.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/6.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/7.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/8.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/8.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Dropbox/9.jpg", [], "Jantar Anos Paulo", "2020-02-26", "Alvalade"),
    new Photo("Recursos/Imagens/Dropbox/10.jpg", ["bad_quality"], "Jantar Anos Paulo", "2020-02-26", "Alvalade"),
    new Photo("Recursos/Imagens/Dropbox/11.jpg", [], "Jantar Anos Paulo", "2020-02-26", "Alvalade"),
    new Photo("Recursos/Imagens/Dropbox/12.jpg", [], "Jantar Anos Paulo", "2020-02-26", "Alvalade"),
    new Photo("Recursos/Imagens/Dropbox/13.jpg", [], "Jantar Anos Paulo", "2020-02-26", "Alvalade")
]