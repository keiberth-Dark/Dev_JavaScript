// Modelo de concurrencia y loop de eventos

// Este ejercicio nos muestra cual es la prioridad de java Script al ejecutar sus tareas.

console.log('Primero');

setTimeout(() => {
  console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
  console.log('Cuarto');
}, 0);

new Promise(function (resolve) {
  resolve('Desconocido...');
}).then(console.log);

console.log('Ultimo');

function hola() {
  console.log('hola');
}

hola();
