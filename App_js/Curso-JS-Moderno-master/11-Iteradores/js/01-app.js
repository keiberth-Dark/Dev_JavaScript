// for (let index = 0; index <=  10; index++) {
//     console.log(`Numero: ${index}`);
// }


// for (let i = 0; i <= 20; i++) {
//     console.log(i % 2 === 0 ? `${i} es par` : `${i} es impar`);
// }

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];


for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}