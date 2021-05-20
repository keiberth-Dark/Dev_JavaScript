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

// Instanciar la clase
const juan = new Cliente('Juan', 4000);
console.log(juan); 
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());