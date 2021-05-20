document.addEventListener('DOMContentLoaded', obtenerDatos() );

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => mostrarHTML(datos) )
}


function mostrarHTML(datos) {
    
    const contenido = document.querySelector('div.contenido');
    
    const datosDiv = document.createElement('div');

    datos.forEach(dato => {
        const {id, nombre, empresa, trabajo} = dato;
        datosDiv.innerHTML += `
            <p>id: ${id}</p>
            <p>Nombre: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
            <hr>
        `;

    });
    
    contenido.appendChild(datosDiv);
   
}