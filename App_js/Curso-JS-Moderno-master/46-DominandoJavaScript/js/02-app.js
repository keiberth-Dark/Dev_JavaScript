// 1ra etapa se registran todas las funciones
// 2da etapa se ejecutan las funciones
obtenerNombre('Marco');

function obtenerNombre(nombre) {
  console.log(`El nombre del cliente es ${nombre}`);
}

// Esto marca un error porque la funcion es declarada dentro de una constante y por lo tanto al llamarla aún no es registrada por el sistema. La funcion debe llamarse despues de ser declarada.
const obtenerCliente2 = function (nombre) {
  console.log(`El nombre del cliente es ${nombre}`);
};
obtenerCliente2('Pablo');
