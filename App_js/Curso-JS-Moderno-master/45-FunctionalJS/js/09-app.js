// const suma = (a, b, c) => {
//   return a + b + c;
// };

// Lo mismo que el anterior
const suma = (a, b, c) => a + b + c;

console.log(suma(1, 2, 3));

const parcial = (a) => (b, c) => suma(a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(4, 3);
console.log(resultado);

const parcial1 = (a) => (b) => (c) => suma(a, b, c);

// const numero1 = parcial1(7);
// const numero2 = numero1(4);
// const resultado1 = numero2(3);

// console.log(resultado1);

// lo mismo que lo anterior
const resultadoParcial = parcial1(7)(4)(3);
console.log(resultadoParcial);
