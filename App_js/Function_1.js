const Sepa = "//---------- Separador ----------//";
/* Function expreseda */

function contar() {
  console.log(4 + 5);
}

contar(); //Puede ser llamada antes de declarar

/* Function declarada */

const Hola = function () {
  console.log(5 + 5);
};
Hola(); //No puede ser llamada antes de declarar

console.log(Sepa);

const num1 = 20;
const num2 = "20";

console.log(parseInt(num2)); //Esto es una Funcion
console.log(num1.toString()); //Esto es un Metodo

/* Parametros  */

const Fun = function (a, b) { // Parametros
  console.log( a + b);
};

Fun(5, 6); //Argumentos

const saludar = function (Nombre = "Desconocido", Apellido = "") { // Parametros
  console.log(` Hola me llamo ${Nombre} y mi apellido es ${ Apellido}`);
};

saludar();
