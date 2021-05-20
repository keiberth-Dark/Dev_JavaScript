const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) )
}

function mostrarHTML(fotos) {
    const contenido = document.querySelector('div.contenido');
    let html = '';

    fotos.forEach(foto => {
        const {post_url, author } = foto;
        html += `
            <a href="${post_url}" target="_blanck">Ver Imagen</a>
            <p>Autor: ${author}</p>
        `;    
    });
    
    contenido.innerHTML = html;
    
}