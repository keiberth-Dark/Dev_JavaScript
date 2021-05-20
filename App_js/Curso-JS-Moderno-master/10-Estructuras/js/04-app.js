// Operador Mayor que y menor que

const dinero = 100;
const totalAPagar = 300;
const tarjeta = false;
const cheque = false;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Si tengo cheques');
} else if(tarjeta) {
    console.log('Si tengo tarjeta');
} else {
    console.log('Fondos insuficientes');
}