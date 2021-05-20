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

//Instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log(pedro);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.saldoRetira(1000);
console.log(pedro.nombreClienteSaldo());
