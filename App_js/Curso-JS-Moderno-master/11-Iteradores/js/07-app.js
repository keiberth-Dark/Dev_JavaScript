const pendientes = ['Tarea', 'Comer', 'Proyecto','Estudiar JavaScript'];
let total = 0;

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];


for (const pendiente of pendientes) {
    console.log(pendiente);
}

for (const producto of carrito) {
    total += producto.precio
    console.log(producto);
}

console.log(`El total de los productos es: $${total}`);