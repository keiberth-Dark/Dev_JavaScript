// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];




// Event Listeners
eventListeners();

function eventListeners(){
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo 
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || []; // si no hay nada en el local storage nos regresa un arreglo vacio
        // crea la lista de los tweets en el html
        crearHTML();
    });
}




// Funciones
function agregarTweet(e) {
    e.preventDefault();

    
    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
   

    // Validación de campo vacio
    if (tweet === '') {
        mostraError('Un mensaje no puede ir vacio');

        return; // evita que se ejecuten más lineas de código
    } 
    
    const tweetObj = {
        id: Date.now(),
        tweet
        // tweet: tweet es igual que al anterior
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de erro
function mostraError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenito
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// muestra listado de los tweets
function crearHTML() {

    limpiarHTML();
    
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // añadir el texto 
            li.innerHTML = tweet.tweet;

            // Asignar el boton 
            li.appendChild(btnEliminar);

            // insertarlo en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega los Tweets actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina Tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}