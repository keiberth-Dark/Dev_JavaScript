// Creando un generador
// tienes que poner un asterisco antes del nombre de la función con eso lo hace un generador

function *crearGenerador() {
    yield 1;
    yield 'Juan';
    yield 3*3;
    yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());

// console.log(iterador);

// Generador para carrito de compras

function *generadorCarrito(carrito){

    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['producto 1', 'producto2', 'producto3'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());