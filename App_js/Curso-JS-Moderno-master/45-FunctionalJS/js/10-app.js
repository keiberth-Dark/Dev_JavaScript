const mostrarNombre = (info) => ({
  obtenerNombre() {
    console.log(`Nombre: ${info.nombre}`);
  },
});

const guardarEmail = (info) => ({
  agregarEmail(email) {
    console.log(`Guardando email en: ${info.nombre}`);
    info.email = email;
  },
});

const obtenerEmail = (info) => ({
  mostrarEmail() {
    console.log(`Email: ${info.email}`);
  },
});

const obtenerEmpresa = (info) => ({
  mostrarEmpresa() {
    console.log(`Empresa: ${info.empresa}`);
  },
});

const obtenerPuesto = (info) => ({
  mostrarPuesto() {
    console.log(`Puesto: ${info.puesto}`);
  },
});

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };
  return Object.assign(
    info,
    mostrarNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerEmpresa(info)
  );
}

function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto,
  };
  return Object.assign(
    info,
    mostrarNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerPuesto(info)
  );
}

const cliente = Cliente('Juan', null, 'Codigo con Juan');
cliente.obtenerNombre();
cliente.agregarEmail('mruvalcaba@oversistemas.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('=======================================================');

const empleado = Empleado('Pedro', null, 'Programador');
empleado.obtenerNombre();
empleado.agregarEmail('plopez@oversistemas.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();
