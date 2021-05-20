// Class Declaretion es mas popular
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

// Instanciar la clase
const juan = new Cliente('Juan', 4000);
console.log(juan); 

// Class Expresion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo
    }
}

const juan2 = new Cliente2('Juanito', 6000);
console.log(juan2);