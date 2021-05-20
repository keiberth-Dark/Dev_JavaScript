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

Object.seal(Cars); //congelamos el objeto no podemos eliminar, Pero podemos modificar las existentes

Cars.Name = "Silverado";
Cars.talla = 14; 

console.log(Cars.Name, Cars.talla);

console.log(Object.isSealed(Cars)); //Señala si esta congelado el objeto 


Cars.año = "50";
console.log(Cars.año);
