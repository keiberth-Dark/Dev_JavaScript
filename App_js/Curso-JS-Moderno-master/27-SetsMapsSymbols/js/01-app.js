// Declarar un Set
const carrito = new Set();

// Añadir un elemento al set
carrito.add('playera');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('playera'); // valor duplicado por eso que no lo reconoce.

// Borra un elemento
carrito.delete('playera');
console.log(carrito.delete('Guitarra')); // nos devuelve un valor tipo booleano si existe o no el elemento a borrar

//Validar si existe un elemento
console.log(carrito.has('Disco #2')); // devuelve un valor tipo booleano
console.log(carrito.has('disco #2')); // Es sensitivo a las mayusculas y minusculas

// Cuantos elementos tenemos
console.log(carrito.size);

// limpiar el set 
// carrito.clear();


// Iteración del set
carrito.forEach(producto => {
    console.log(producto);
});

console.log(carrito);

// del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

