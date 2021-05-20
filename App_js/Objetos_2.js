"use strict";

/* Para tratar objetos como constantes usamos /"use strict"/ */
const Cars = {
  Name: "Mustang",
  talla: "635x555x86",
  Combus: "Electrico",
  kilos: "450 kl",
  colors: ["Azul", "Rojo", "Negro", "Purpura", "Celeste"],
  Fabric:{
    Emisferio: "EE.UU",
    AñoFabricacion:2019,
    distribucion: "U.K",
  }
};
console.log(Cars.Name, Cars.talla);

Object.freeze(Cars); //congelamos el objeto . no podemos add , remove, modif

/* Cars.Name = "Silverado";
Cars.talla = 14; */

console.log(Cars.Name, Cars.talla);
console.log(Object.isFrozen(Cars)); //Señala si esta congelado el objeto 
