const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// Agregar nuevas propiedades a un objeto

producto.imagen = 'imagen.jpg';


// eliminar propiedades a un objeto
delete producto.disponible;

console.log(producto);

