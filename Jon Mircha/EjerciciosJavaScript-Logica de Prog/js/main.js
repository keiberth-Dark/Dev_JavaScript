import {Funciones1_4} from "./funciones1_4.js";
import {Funciones5_8} from "./funciones5_8.js";
import {Funciones9_11} from "./funciones9_11.js";
import {Funciones12_14} from "./funciones12_14.js";
import {Funciones15_17} from "./funciones15_17.js";
import {Funciones18_20} from "./funciones18_20.js";
import {Funciones21_23} from "./funciones21_23.js";
import {Funciones24_26} from "./funciones24_26.js";
import {Pelicula} from "./pelicula.js";

let text = "Hola como estas?";
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

let fuctions1_4 = new Funciones1_4();
let fuctions5_8 = new Funciones5_8();
let fuctions9_11 = new Funciones9_11();
let fuctions12_14 = new Funciones12_14();
let fuctions15_17 = new Funciones15_17();
let fuctions18_20 = new Funciones18_20();
let fuctions21_23 = new Funciones21_23();
let fuctions24_26 = new Funciones24_26();
let pelicula = new Pelicula();


console.log("Ejercicios 1/4");
fuctions1_4.caracteresTexto(text);
fuctions1_4.recorteTexto(text,9);
fuctions1_4.separarTexto(text,' ')
fuctions1_4.repetirTexto(text,3);
console.log("    ");
console.log("Ejercicios 5/8")
fuctions5_8.invertirTexto(text);
fuctions5_8.numeroPalabras(text);
fuctions5_8.textoPolindromo(text);
fuctions5_8.eliminarPatron(text,"a");
/* console.log("    ");
console.log("Ejercicios 9/11");
fuctions9_11.numeroRandom500_600();
fuctions9_11.nuemeroCapicua(2002);
fuctions9_11.factorial(5);
console.log("   ");
console.log("Ejercicios 12/14");
fuctions12_14.numeroPrimo(10);
fuctions12_14.parImpar(11);
fuctions12_14.gradosAFahrenheit(0,'c');
console.log("    ");
console.log("Ejercicios 15/17");
fuctions15_17.decimalABinarioViseversa(1010,2);
fuctions15_17.descuento(100,20);
fuctions15_17.fechaanios(new Date(1984,9,23));
console.log("    ");
console.log("Ejercicios 18/20");
fuctions18_20.vacalesConstantes("HolA mundo");
fuctions18_20.validarNombre("oly")
fuctions18_20.validarEmail("olt32@gmail.com");
console.log("    ");
console.log("Ejercicios 21/23");
fuctions21_23.elevarCuadrado([1,2,3]);
fuctions21_23.menorMayorArreglo([1,2,3,-30]);
fuctions21_23.paresImparesArreglos([1,2,3]);
console.log("    ");
console.log("Ejercicios 24/26");
fuctions24_26.ascDesc([10,3,1,4]);
fuctions24_26.eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
fuctions24_26.promedio([9,8,7,6,5,4,3,2,1,0]);
console.log("      ");
console.log("Ejecicio 27");
console.log(Pelicula.generosAceptados);
const arrPeliculas = [new Pelicula("aa1234567","Casadores de sueños","stefhen",2007,["USA","Chile"],["Thiller","Musica"],6),
new Pelicula("bb1234567","sueños","Mario",2005,["USA","Chile"],["Thiller","Musica"],6),
new Pelicula("cc1234567","casadores","Jimena",2007,["USA","Chile"],["Thiller","Musica"],6)];
console.log("Peliculas");
pelicula.imprimirFichaTecnica(arrPeliculas);
 */