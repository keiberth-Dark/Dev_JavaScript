const cargarJson = document.querySelector('#cargarJSON');

cargarJson.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => mostrarHTML(datos) )
}

function mostrarHTML({id, nombre, empresa, trabajo}) {
    const contenido = document.querySelector('div.contenido');

    const divDatos = document.createElement('div');

    divDatos.innerHTML = `
        <p>Id: ${id}</p>
        <p>Nombre: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    ` ;

    contenido.appendChild(divDatos);
}