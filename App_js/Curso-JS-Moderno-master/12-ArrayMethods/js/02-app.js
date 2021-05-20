const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach((mes,i) => {
    if(mes === 'Abril'){
        console.log(`Encontrado en el indice ${i}`);
    }
});

// Encontrar el indice de Abril
// Si no se encuentra nos da como resultado -1

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice); 

// Encontrar un indice de un arreglo de objetos...
// Si hay mas de un elemento que coincida con la busqueda solo nos da el primero
const indice2 = carrito.findIndex(producto => producto.nombre === 'Tablet');
console.log(`El indice de la consulta que realizaste es ${indice2}`);