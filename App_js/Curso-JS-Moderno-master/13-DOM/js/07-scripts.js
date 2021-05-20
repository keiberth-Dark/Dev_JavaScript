const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado.style);


// CSS
// background-color;

// JavaScript
// backgroundColor;

encabezado.style.color = 'black';
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';


// Crear clase nueva con JS 
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);