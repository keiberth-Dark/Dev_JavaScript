const producto = "Monitor 20 Pulgadas";

//.replace reemplazar

console.log(producto);
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//.slice para cortar

console.log(producto.slice(0,10));
console.log(producto.slice(08));
console.log(producto.slice(2,3));

// Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

const usuario = 'Marco';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));