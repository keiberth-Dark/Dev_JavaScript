const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];


for (let index = 0; index < carrito.length; index++) {
    console.log(`${carrito[index].nombre}   precio: \$${carrito[index].precio}`);
}
console.log('_____________________________________________________________');

carrito.forEach(function(producto){
    console.log(`${producto.nombre}   precio: \$${producto.precio}`);
});