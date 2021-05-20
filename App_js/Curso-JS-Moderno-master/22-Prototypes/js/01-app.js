// Objetos literales, no son versatiles
const cliente = {
    nombre: "Marco",
    saldo: 500
};

console.log(cliente);

// Programación orientada a Objetos.
// Creamos un constructor.
// Objetos dinamicos y reutilizables.

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const marco = new Cliente('Marco', 500);
console.log(marco);