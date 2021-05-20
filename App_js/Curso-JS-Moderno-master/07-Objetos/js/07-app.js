const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// no se puede reasignar una variable contante

// const nombreProducto = 'Monitor';
// nombreProducto = 'Tablet';


// En una variable const, al asignase un objeto, sus propiedades si se pueden reasignar
producto.disponible = false;

delete producto.precio;

console.log(producto);