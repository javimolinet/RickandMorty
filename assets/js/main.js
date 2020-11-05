import DetallesPersonajes from './detallesPersonajes.js'


const llamadoPersonajes = (() => {
    const UrlBase = "https://rickandmortyapi.com/api/character/";
    const resultadoElemento = document.querySelector('.resultados');
    let almacenarResultados;
  
    const ConectarConApi = async () => {
        try {
            const ConexionApi = await fetch(UrlBase);
            const data = await ConexionApi.json();
            almacenarResultados = data.results
            return almacenarResultados;
        } catch (error) {
            console.log(error)
        }finally {
            let ruedita = document.querySelector(".spinner-border")
            ruedita.classList.add('d-none')
           
          }
    };

    async function conectarSegundaApi() {
        try {
            const arregloPersonajes = await ConectarConApi();
            arregloPersonajes.forEach(async (elemento) => {
                const id = elemento.id
                const response = await fetch(`${UrlBase}${id}`);
                const datos = await response.json();
                

                const nombre = datos.name;
                const imagen = datos.image;
                const ide = datos.id;
                const estado = datos.status;
                const especie = datos.species;
                const genero = datos.gender;
                const creado = datos.created;
                const origen = datos.origin.name;
                const lugar = datos.location.name;
                const episodios = datos.episode.length
                
                const detallesP = new DetallesPersonajes(
                    ide,
                    nombre,
                    estado,
                    especie,
                    genero,
                    creado,
                    origen,
                    lugar,
                    episodios,
                    imagen
                );
                detallesP.infoGeneral(resultadoElemento);
                detallesP.infoModal(resultadoElemento);

            })
            return {arregloPersonajes}
        } catch (error) {
            console.log(error)
        }

    }
    return{conectarSegundaApi}

}
   
)();
llamadoPersonajes.conectarSegundaApi();









