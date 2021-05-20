const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// Modo anterior de declarar una variable con el valor de un objeto

// const nombre = producto.nombre;
// console.log(nombre);

//Nueva manera de declarar variables con los valores de un objeto

const {
    nombre,
    precio,
    disponible
} = producto;
console.log(nombre);


// Destructuring con Arreglos
// En los arreglos tu defines el nombre, porque ellos se basan en la posicion no por nombre de el valor.
const numeros = [10,20,30,40,50];

// const [primero] = numeros;

// console.log(primero);

//  // Si requieres solo el tercer valor

// const [, , tercero] = numeros;

// console.log(tercero);

const [primero, ...tercero] = numeros;
console.log(primero);
console.log(tercero);