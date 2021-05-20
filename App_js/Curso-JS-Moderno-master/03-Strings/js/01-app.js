const producto = "Monitor 20 pulgadas";
const producto2 = String('Monitor 21 pulgadas');
// No es muy usual pero parece que crea un objeto tipo String
// Por lo que nos da como resultado como un objeto y cada letra
// es un elemento
const producto3 = new String('Monitor 27 pulgadas');


console.log(producto);
console.log(producto2);
console.log(producto3);

// Si tienes la necesidad de ingresar una comilla doble dentro de el estring debes escapar la comilla

const productos = "Monitor de 27\"";
console.log(productos);