const carrito = [];

const producto = {
    nombre: 'Pantalla de 24 pulgadas',
    precio: 300
};

const producto2 = {
    nombre: 'Celular',
    precio: 800
};

const producto3 = {
    nombre: 'Teclado',
    precio: 50
};

carrito.push(producto);
carrito.push(producto2);

// Agregar un elemento al inicio del array

carrito.unshift(producto3);

console.table(carrito);