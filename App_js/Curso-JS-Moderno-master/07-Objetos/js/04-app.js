const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// Modo anterior de declarar una variable con el valor de un objeto

// const nombre = producto.nombre;
// console.log(nombre);

//Nueva manera de declarar variables con los valores de un objeto

const{nombre,precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);