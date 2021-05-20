// Crear symbols
const sym = Symbol();
const sym2 = Symbol();

// console.log(Symbol() === Symbol()); //Todos los Symbols son diferentes


const nombre = Symbol();
const apellido = Symbol();


const persona = {};

persona[nombre] = 'Marco';
persona[apellido] = 'Ruvalcaba';
persona.tipoCliente = 'Premium';
persona.saldo = 5000;

// Para poder llegar al valor del elemento se necesita declararlo así
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};
cliente[nombreCliente] = 'Pedro';

console.log(cliente);
// llegar al valor 
console.log(cliente[nombreCliente]);
// imprimir la descripción
console.log(nombreCliente);

