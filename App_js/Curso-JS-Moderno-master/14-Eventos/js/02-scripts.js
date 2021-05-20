const nav = document.querySelector('.navegacion');

// registrar un evento

nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo a la navegacion');
    nav.style.backgroundColor = 'transparent';
});


// mousedown - similar al click 
// click 
// dblclick = doble click
// mouseup - cuando sueltas el mouse
