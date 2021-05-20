"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

//nos permite saber si nuestro objeto esta congelado
console.log(Object.isFrozen(producto));