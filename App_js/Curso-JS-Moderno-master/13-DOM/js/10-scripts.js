const enlace = document.createElement('A');

// Agregando el texto
enlace.textContent = 'Nuevo enlace';

// añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

// mas atributos
enlace.setAttribute('data-enlace', 'nuevo-enlace');

// adicionar clase 
enlace.classList.add('alguna-clase');
// adicionar id 
enlace.setAttribute('id', 'enlace-id');

enlace.onclick = miFuncion;

console.log(enlace);

// Seleccionar donde se va a mostrar el nuevo enlace
const navegacion = document.querySelector('.navegacion');
// Se crea al final
// navegacion.appendChild(enlace);
// Tener mayor control donde posicionarlo, se crea en la posicion 2
navegacion.insertBefore(enlace, navegacion.children[1]);


// console.log(navegacion);

console.log('_________________________________________');
// Crear un nuevo card

// parrafos
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Viajando a NuevaYork';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$1,400 por persona';
parrafo3.classList.add('precio');

// console.log(parrafo1);
// console.log(parrafo2);
// console.log(parrafo3);

// div de parrafos
const divInfo = document.createElement('div');
divInfo.classList.add('info');
divInfo.appendChild(parrafo1);
divInfo.appendChild(parrafo2);
divInfo.appendChild(parrafo3);
// console.log(divInfo);

// imagen
const nuevaImagen = document.createElement('img');
nuevaImagen.src = 'img/newyork2.jpg';
// console.log(nuevaImagen);

// div Card
const nuevaCard = document.createElement('div');
nuevaCard.classList.add('card');
nuevaCard.appendChild(nuevaImagen);
nuevaCard.appendChild(divInfo);
// console.log(nuevaCard);

// Seleccionar donde se va a presentar la nueva card
const bloqueCard = document.querySelector('.hacer .contenedor-cards');
bloqueCard.insertBefore(nuevaCard, bloqueCard.children[3]);

console.log(bloqueCard.children);


function miFuncion(){
    alert('Diste click');
}