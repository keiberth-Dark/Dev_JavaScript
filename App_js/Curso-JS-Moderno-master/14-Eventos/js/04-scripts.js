const formulario = document.querySelector('.formulario');

formulario.addEventListener ('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); // detiene la accion a proceder

    console.log('Buscando...');

    console.log(e.target.action);
}