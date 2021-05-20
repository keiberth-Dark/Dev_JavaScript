function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = true;

    setTimeout(() => {
      if (!error) {
        resolve('El listado de Clientes se descargo correctamente');
      } else {
        reject('Error en la conexión');
      }
    }, 3000);
  });
}

// Async await  Declaration
// async function ejecutar(){}

// Async await Function express
const ejecutar = async () => {
  try {
    console.log(1 + 1);
    const respuesta = await descargarClientes();
    console.log(2 + 2);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

ejecutar();
