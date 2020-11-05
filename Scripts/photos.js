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
        this.date = date, // Data no formato DD/MM/YYYY,
        this.local = local
    }
}

