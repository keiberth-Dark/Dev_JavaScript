// Singleton
// Solo se puede crear una instancia.

let instancia = null;

class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    } else {
      return instancia;
    }
  }
}

const persona = new Persona('Marco', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Marco', 'correo@correo.com');
console.log(persona2);
