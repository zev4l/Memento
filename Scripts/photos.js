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
    new Photo("Recursos/Imagens/Local/1.jpg", ["landscape"], "Férias Verão", "2019-08-28", "Brasil"),
    new Photo("Recursos/Imagens/Local/2.png", ["bad_quality"], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/3.jpg", [], "Festa de Final de Curso", "2020-05-27", "Casa"),
    new Photo("Recursos/Imagens/Local/4.jpg", [], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/5.jpg", ["bad_quality"], "Festa de Final de Curso", "2020-05-25", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/6.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/7.jpg", ["faces"], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/8.jpg", ["faces"], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/9.jpg", ["faces"], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/7.jpg", ["faces"], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/11.jpg", [], "Festa de Final de Curso", "2020-05-27", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/12.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/13.jpg", ["landscape"], "Passeio Rural", "2020-03-12", "Sintra"),
    new Photo("Recursos/Imagens/Local/14.jpg", ["landscape"], "Férias Noruega", "2020-02-14", "Oslo, Noruega"),
    new Photo("Recursos/Imagens/Local/15.jpg", [], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/22.jpg", ["landscape"], "Férias Verão", "2019-08-28", "Brasil"),
    new Photo("Recursos/Imagens/Local/23.jpg", ["faces"], "Férias Verão", "2019-08-28", "Brasil"),
    new Photo("Recursos/Imagens/Local/24.jpg", ["faces"], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/28.jpg", ["faces"], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/29.jpg", ["faces"], "Festa de Final de Curso", "2020-05-27", "Universidade de Lisboa"),
    new Photo("Recursos/Imagens/Local/32.jpg", [], "Férias Verão", "2020-07-24", "Parque das Nações"),
    new Photo("Recursos/Imagens/Local/33.jpg", [], "Festa de Final de Curso", "2020-05-28", "Parque das Nações")

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

]