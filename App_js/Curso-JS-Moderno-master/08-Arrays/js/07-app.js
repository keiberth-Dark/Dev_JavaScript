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

const producto4 = {
    nombre: 'Celular 2',
    precio: 520
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

carrito.unshift(producto3);

// // Borra el último registro
// carrito.pop();

// // Eliminar al inicio del arreglo
// carrito.shift();

// // eliminar un registro seleccionado
// carrito.splice(1,1);

// Para usarlo como pop 
carrito.splice(carrito.length -1,1);

// Para usarlo como shift
carrito.splice(0,1);


console.table(carrito);