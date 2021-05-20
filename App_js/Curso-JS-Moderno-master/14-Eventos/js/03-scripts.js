const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener ('input', (e) => {
    if (e.target.value ==='') {
        console.log('Fallo la validación');
    } else {
        console.log(e.target.value);
    }
});

// keyup - ejecuta el evento cuando sueltas la tecla
// blur - cuando sales del input ejecuta el evento 
// copy - cuando copias
// paste - cuando pegas algo
// cut - cuando cortas

// input- cumple con todos los anteriores excepto el blur


