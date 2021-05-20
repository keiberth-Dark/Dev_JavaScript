const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// Saber el tipo de variable
console.log(typeof numero1);

// Convertir un string a numero
console.log(numero1);
console.log(Number.parseInt(numero1));
// Para numeros flotantes
console.log(Number.parseFloat(numero2));

// Si tratamos de convertir una variable que no sea numero
console.log(Number.parseInt(numero3));

// Para validar si es un numero entero
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));