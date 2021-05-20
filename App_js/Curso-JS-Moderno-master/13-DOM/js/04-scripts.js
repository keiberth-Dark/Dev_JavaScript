const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Es mas especifico.
const formulario1 = document.querySelector('.contenido-hero #formulario');
console.log(formulario1);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);