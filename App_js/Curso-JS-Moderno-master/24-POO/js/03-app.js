class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Metodo similar a prototype
    mostrarInformacion(){
        // const {nombre, saldo} = Cliente;
        return `${this.nombre} tiene un saldo de $ ${this.saldo}`;
    }

    // Con estos metodos no se requiere instanciar el metodo.
    // Esto pertenece a la clase y no al objeto 
    // debemos declararla como Cliente.bienvenida();
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo); // Con super heredamos los parametros de un cosntructor Padre.
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){  // reescribir un método
        return `Bienvenido al cajero de empresa`;
    }
}

// Instancia
const juan = new Cliente('Juan', 4000);
const empresa = new Empresa('Aprendiendo con Marco', 6000, 33393232, 'Aprendiendo Online');

console.log(empresa);
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

console.log(empresa.mostrarInformacion());

