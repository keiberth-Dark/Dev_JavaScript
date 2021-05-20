// El alcance de una variable

// Para que una variable este como global, debes sacarlas de las llaves o fuera de las funciones.
const cliente = 'Marco';
mostrarCliente();

console.log('==================');
const login = true;
clienteLogueado();

console.log('==================');

function mostrarCliente() {
  // le da prioridad a la variable que esta dentro de una función
  const cliente = 'Pedro';
  console.log(cliente);
}

// Fijate que el scope esta limitado con las llaves
function clienteLogueado() {
  const cliente = 'Juan';
  console.log(cliente);

  if (login) {
    const cliente = 'Admin';
    console.log(cliente);
  }
}
