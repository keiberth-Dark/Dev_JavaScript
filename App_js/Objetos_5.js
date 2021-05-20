"use strict";

                              /*  THIS */



const Cars = {
  Nombre: "Mustang",
  talla: 80,
  Combustible: "Electrico",
  gramos: "450 kl",
  precio: 450 ,
  MostrartInfo: function () {
    console.log(`El producto: ${this.Nombre} tiene un precio de ${this.precio}$`)
  }
};

Cars.MostrartInfo();


                              /*  Constructor */

//Object Literal
  const Style = {
    color: "red" ,
    medidas : 30-40-50,
    disponible : true
  }

//Object Constructor

function Style_(color,medidas) {
  this.color = color;
  this.medidas = medidas;
  this.disponible = true;
}

const Style2 = new Style_ ("Dorado",80);
console.log(Style2);


const Style3 = new Style_ ("Marron",125);
console.log(Style3);

                              /* Metodos- Entries,keys,values  */

      
console.log(Object.keys(Style))
console.log(Object.values(Style))
console.log(Object.entries(Style))

