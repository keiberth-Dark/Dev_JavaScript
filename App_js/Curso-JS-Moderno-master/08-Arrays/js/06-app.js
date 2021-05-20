const carrito = [];

const producto = {
    nombre: 'Pantalla de 24 pulgadas',
    precio: 300
};

const producto2 = {
    nombre: 'Celular',
    precio: 800
};

const producto3 = {
    nombre: 'Teclado',
    precio: 50
};

let resultado;

// Forma declarativa.
resultado = [...carrito,producto];
resultado = [...resultado,producto2];

//Para agregar el elemento al inicio del arreglo
resultado = [producto3, ...resultado];

console.table(resultado);