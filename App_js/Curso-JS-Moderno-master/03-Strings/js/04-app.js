const producto = "       Monitor 20 Pulgadas          ";

console.log(producto);
console.log(producto.length);

//Eliminar espacios en blanco del inicio
console.log(producto.trimStart());
//Eliminar espacios en blanco del final
console.log(producto.trimEnd());

//Eliminar de inicio y fin
console.log(producto.trimStart().trimEnd());

console.log(producto.trim());
