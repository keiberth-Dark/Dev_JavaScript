/* --------------------Objetos-------------------- */
//Delete de un valor en un objeto

const productos = {
  Nombre: "Shampo",
  Precio: 6e2,
  disponible: true,
};

console.log(productos);
console.log(productos.Nombre);
console.log(productos["disponible"]);

delete productos.disponible;

console.log(productos);

/* --------------------Objetos-------------------- */
//Destructuracion
console.clear();

const autos = {
  Nombre: "Subaru",
  Tamaño: "35x95x26",
  Combustible: "Diesel",
  Continente: "Europeo",
  Peso: "500 kl",
  colores: ["Azul", "Rojo", "Amarillo", "Negro", "Purpura", "Celeste"],
};
console.log(autos.Nombre);

//Antigua manera de destructurar

const SuNombre = autos.Nombre;
console.log(SuNombre);

//new manera de Destructurar

const { Nombre,Tamaño,Combustible,Continente,Peso,colores } = autos;

console.log(Nombre,Tamaño,Combustible,Continente,Peso,colores);


/* --------------------Objetos-------------------- */
//Destructuracion en objetos anidados {{}} o  objetos dentro de objetos
console.clear();



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


const { Name,Fabric,Fabric: {Emisferio}} = Cars; //Jamas usar Fabric.Emisferio


console.log(Cars); 

console.log(Fabric);
console.log(Emisferio);
console.log(Continente);

