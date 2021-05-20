const obtenerCliente = () => {
  const nombre = 'Marco Ruvalcaba';

  function mostrarNombre() {
    console.log(nombre);
  }

  return mostrarNombre();
};

const cliente = obtenerCliente();

cliente;
