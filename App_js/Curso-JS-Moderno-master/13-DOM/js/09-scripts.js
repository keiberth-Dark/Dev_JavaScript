

const primerEnlace = document.querySelector('a');
primerEnlace.remove();

// Eliminar desde el Padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[1]);

