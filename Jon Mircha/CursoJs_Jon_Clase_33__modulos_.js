

import saludar,{Saludar, PI, usuario} from"./Constantes.js";
import{Aritmetica as calculos} from"./aritmeticas.js";

console.log("Hola Estoy Dentro Modulos");

console.log(PI, usuario);
/* console.log(Aritmetica.Sumar(3,4)); */
console.log(calculos.Sumar(3,4));
console.log(calculos.Restar(3,4));

/* Saludar(); */
let saludo = new Saludar();
saludo;   
  
