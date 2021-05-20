"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// Con el seal se puede modificar las propiedades ya existentes, pero no se pueden añadir o borrar
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(`El objeto esta sellado: ${Object.isSealed(producto)}`);