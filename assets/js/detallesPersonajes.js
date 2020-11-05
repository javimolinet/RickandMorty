import Personajes from './personajes.js'

class DetallesPersonajes extends Personajes {
    constructor(id, name, status, species, gender, created, origin, location, episode,image) {
        super(id)
        let nombre = name;
        this.getName = () => {
            return name
        }
        this.setName = (newName) => {
            name = newName
        }
        let estado = status;
        this.getStatus = () => {
            return status
        }
        this.setStatus = (newStatus) => {
            status = newStatus
        }
        this.specie = species;
        this.gender = gender;
        this.created = created;
        this.origin = origin;
        this.location = location;
        this.episode = episode;
        this.image = image

    }
    getImage() {
        return this.image;
    }
    get Name() {
        return this.getName;
    };
    set Name(newName) {
        this.setName(newName)
    };
    get Status() {
        return this.getStatus;
    };
    set Status(newStatus) {
        this.setStatus(newStatus)
    }
    infoGeneral(elemento) {
        elemento.innerHTML += `
        <img data-toggle="modal" data-target="#staticBackdrop${this.getidPersonajes()}" src="${this.getImage()}" alt="">
        <span><ul><li>${this.getidPersonajes()}</li><li>${this.specie}</li></ul></span>`
    }
    infoModal(elemento){
        elemento.innerHTML += `
        <div class="modal fade" id="staticBackdrop${this.getidPersonajes()}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">${this.getName()}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <ul>
            <li>ID : ${this.getidPersonajes()}</li>
            <li>Nombre : ${this.getName()}</li>
            <li>Género : ${this.gender}</li>
            <li>Especie : ${this.specie}</li>
            <li>Status : ${this.getStatus()}</li>
            <li>Creado : ${this.created}</li>
            <li>Origen : ${this.origin}</li>
            <li>Cantidad de Episodios ${this.episode}</li>
            </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
        `
    }
}

export default DetallesPersonajes;