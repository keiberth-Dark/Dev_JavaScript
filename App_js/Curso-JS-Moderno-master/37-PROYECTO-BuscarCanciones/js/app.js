import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();
   
    // obtener los datos de los campos input
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

          
    // Validar los campos
    if (artista === '' || cancion === '') {
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 2000);

        return;
    }

    // Consultar nuestra api

    const busqueda = new API(artista,cancion);

    busqueda.consultarAPI();
}
