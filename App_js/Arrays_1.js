/* Arrays */

const arr1 = [
  "Hola",
  35,
  "Apellido",
  true,
  false,
  { Nombre: "Keiberth", Apellido: "Areyan" },
  [30, 50, 60],
];

console.table(arr1);
console.log(arr1[5]);
console.log(arr1[5].Nombre);
console.log(arr1[6][0]);

console.clear();









            /* Arrays Recorriendolo */

const meses = ["enero", "febrero", "marzo", "abril", "junio"];
const meses2 = ["enero", "febrero", "abril", "mayo", "junio"];


for (let i = 0; i < meses.length; i++) {
  //console.table(i);
  console.log(meses[i]);
}

console.log("-----------------Separador-----------------")



          /* ("-----------------Delete-----------------")*/
      /* Todo esto forma parte de la forma imperativa  */

//imperativa modifica el objeto actual

/* Al inicio */
meses.unshift("julio","agosto")
meses.shift();


/* Al final */

//meses.push("julio","agosto")
//meses.pop();


console.log(meses);
            /* Todo esto forma parte de la forma declarativa  */

//declarativa no modifica el objeto actual


const arr1_ = ["Keiberth", "Jesus","Areyan"];
const arr2_ = ["Zully","Keith","Areyan",];

let resultado;

resultado = [...arr1_, ...arr2_];

resultado = [...resultado, ...meses2];



console.log(resultado);


resultado.splice(1,3);
console.log(resultado);
