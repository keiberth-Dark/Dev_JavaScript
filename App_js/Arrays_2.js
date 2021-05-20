
const arr1 = [
  "Hola",
  35,
  "Apellido",
  true,
  false,
  { Nombre: "Keiberth", Apellido: "Areyan" },
  [30, 50, 60],
];

const obj = {
  Nombre: "keiberth",
  Apellido: "Areyan",
  Adad: 20,
};

const { Nombre } = obj;

console.log(Nombre);


/* destructuration Arrais */

const num = [10,20,30,40,50,60,70,80];

const [,,C_] = num;

//const [A_,B_,C_] = num;

/* Es importante saber que no puedes destruturar con la posicion de sus numeros 
este accede al automaticamente desde el pricipio y por eso sus espacios deben estar bacios
para llegar al que se quiere  */
console.log(C_)


