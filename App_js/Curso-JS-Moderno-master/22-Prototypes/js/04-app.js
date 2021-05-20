function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Creando Prototype
// siempre debe llevar function si es arrowfunction cambia la gramatica
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    }else {
        tipo = 'Nomal';
    }

    return tipo;
};

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.saldoRetira = function(retira) {
    this.saldo -= retira;
};

// Solo agrega el constructor en el prototype
function Persona(nombre, saldo, telefono){
    // LLamamos los atributos comunes de Cliente
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// si deseamos copiar las funciones en el prototype
Persona.prototype = Object.create(Cliente.prototype);

// Ya que tenemos las funciones le agregamos el constructor
Persona.prototype.constructor = Cliente;


// Instanciarlo
// Debes de crear primero los prototypes antes de instanciarlo para que tome todas las propiedades
const marco = new Persona('Marco', 10000, 3339541057);

console.log(marco);
console.log(marco.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de ${this.nombre} es ${this.telefono}`;
}

console.log(marco.mostrarTelefono());