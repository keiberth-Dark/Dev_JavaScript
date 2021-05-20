/*
Variables
*/


const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



// Campos
const email   = document.querySelector('#email');
const asunto  = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// iniciarApp();
eventListeners();
function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Resetear formulario
    btnReset.addEventListener('click', resetearFormulario);

    // Enviar formulario
    formulario.addEventListener('submit', enviarFormulario);


}

/*
Funciones
*/
// Iniciando la app
function iniciarApp(){
    quitarBorde();
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Validando el formulario
function validarFormulario(e){
    // Borrar los errores
   
    if (e.target.value.length > 0) {
        quitarParrafo();
        validaPositivo(e.target);
    } else {
        validaNegativo(e.target);
        mostrarError('Todos los campos son obligatorios');
    }
    
    if (e.target.type === 'email') {
        
        if (er.test(e.target.value)) {
            quitarParrafo();
            validaPositivo(e.target);
            
        } else {
            validaNegativo(e.target);
            mostrarError('Email no valido');
        }
    }

    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 
    
}

// Mostrar Errores
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'text-red-500','mt-5', 'text-center', 'error');
    
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

// Enviar el email
function enviarFormulario(e) {
    e.preventDefault();
    // console.log('enviando el email');

    // Mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    
    // Después de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';

        // Mensaje que dice que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Se ha enviado correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-5', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        // Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        // Borrar parrafo
        setTimeout(() => {
            parrafo.remove(); // Eliminar el mensaje de éxito
            resetearFormulario();
        }, 3000);
    }, 2000);

}

// Resetear el formulario
function resetearFormulario() {    
    formulario.reset();
    iniciarApp();
}

function quitarBorde(){
    
    const campo = document.querySelectorAll(".campo");

    campo.forEach(input => {
        input.classList.remove('border-green-500', 'border-red-500');
    });

    quitarParrafo();
    
}

// quita el Parrafo de error
function quitarParrafo(){
    const error = document.querySelector('p.error');
    if (error) {
        error.remove();
    }
}

// Pone borde verde y quita el Rojo
function validaPositivo(id){
    id.classList.remove('border', 'border-red-500');
    id.classList.add('border', 'border-green-500');
}

function validaNegativo(id) {
    id.classList.remove('border', 'border-green-500');
    id.classList.add('border', 'border-red-500');
    
}