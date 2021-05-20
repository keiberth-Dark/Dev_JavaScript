"use strict";



/* Uniendo objetos */

const Cars = {
  Nombre: "Mustang",
  talla: 80,
  Combustible: "Electrico",
  gramos: "450 kl",
};

const Auto = {
  Name: "Silverado",
  size: 40,
  energy: "Electrico",
  kilos: "450 kl",
};


console.log(Cars)
console.log(Auto)


/* old manera de trabajar */
const Automobiles = Object.assign(Cars,Auto);


/* new manera de trabajar (Spread operators) */

const Automobiles2 = {...Cars, ...Auto};


console.log(Automobiles);
console.log(Automobiles2);

