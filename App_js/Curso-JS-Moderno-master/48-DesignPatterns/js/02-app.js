// Constructor Pattern

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email);
    this.empresa = empresa;
  }
}

const cliente = new Cliente('Marco', 'correo@correo.com', 'Oversistemas');

console.log(cliente);
