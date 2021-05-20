// Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variables se pueden reasignar
producto = "Monitor de 19 pulgadas";
console.log(producto);

//JS es un lenguaje de tipo dinámico, no se especifica tipo de dato
producto = 20;
console.log(producto);

//Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;
disponible = false;

//Inicializar múltiples variables. 
var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

//Las variables no pueden iniciar con número
// var 99dias; //incorrecto
var dias99; //correcto

// var 01_; //incorrecto
var _01; //correcto

// Estilos en las variables
var nombreProducto; //camelCase, la mas utilizada
var nombre_producto_categoria; //snakeCase
var Producto; //Se reserva para declarar Clases