const producto = 'Monitor 20';

console.log(producto);

//Conocer la cantidad de letras de la cadena de texto

//length es una de las pocas funciones que no ocupa ()
console.log(producto.length);

//Si deseamos saber en que posición esta la cadena que estamos buscando si no encuentra la cadena nos devuelve -1
console.log(producto.indexOf('20'));


// Si deseamos saber si existe una cadena usamos includes la respuesta es booleana

console.log(producto.includes('Tables'));
console.log(producto.includes('monitor'));
console.log(producto.includes('Monitor'));