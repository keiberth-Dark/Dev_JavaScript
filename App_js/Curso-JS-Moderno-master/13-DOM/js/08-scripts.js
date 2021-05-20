const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes);  //Los espacios en blanco se consideran elementos
console.log(navegacion.children); // Nos muestra los elementos reales sin espacios en blanco
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);
console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&');
// primer elemento
console.log(navegacion.firstElementChild);
// ultimo elemento
console.log(navegacion.lastElementChild);

const card = document.querySelector('.card');
console.log(card.children); // lista los elementos hijos
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = 'Prueba realizada';
console.log(card.children[1].children[1].textContent);

// Cambiar imagen
console.log(card.children[0]);
card.children[0].src = 'img/hacer4.jpg';

// Traversing del Hijo al Padre 
console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement); // mejor usar parentElement

// Para navegar entre elementos hermanos
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

console.log('-------------------------');
// ir al ultimo elemento
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);