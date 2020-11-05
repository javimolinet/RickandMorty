
class Personajes {
    constructor(id) {
        let idPersonajes = id;

        this.getidPersonajes = () => {
            return idPersonajes
        }
        this.setidPersonajes = (nuevoId) => {
            idPersonajes = nuevoId;
        }

    }
    get Id() {
        return this.getidPersonajes
    }
    set Id(nuevoId) {
        this.setidPersonajes(nuevoId);
    }

}

export default Personajes;