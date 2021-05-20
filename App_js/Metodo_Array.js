const arr = [[], []],
  arr1 = [{}, {}],
  arr2 = [27, 50],
  arr3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "Julio"],
  arr4 = ["Keiberth"],
  arr5 = ["Areya"],
  cond = (currentValue) => currentValue < 40,
  c = "///-----------C-----------///",
  a = [
    { Nombre: "Keiberth", Apellido: "Areyan", Edad: 20 },
    { Nombre: "Lola", Apellido: "Selandi", Edad: 12 },
    { Nombre: "Franchesca", Apellido: "Guerrero", Edad: 16 },
  ];

console.log(c);
console.log(arr4.concat(arr5,arr2)); //concat
console.log(arr4.copyWithin(arr5)); //copyWithin       //???
console.log(arr4.entries(arr5)); //entries          //???
console.log(arr4.fill(arr5)); //fill


/* ------------------------------------------------ */

//Comprueba si un valor existe en un arreglo
const Re = arr3.includes("Enero");
console.log(Re); //includes

//Comprueba si un objeto existe en un arreglo
const Res = a.some((nombres) => {
  //some
  return nombres.Nombre === "Franchesca";
});
console.log(Res);

const Resu = arr3.some((nombres) => {
  //some
  nombres === "Febrero";
});
console.log(Res);

/* ------------------------------------------------ */
arr3.forEach((mes, Id) => {
  if (mes === "Mayo") {
    console.log(`Encontramos a ${mes} en el indice ${Id}`);
  }
}); //forEach

/* ------------------------------------------------ */

/* Encontrar el indice de un Array */
let arc = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "Julio"],
  isl = (Element) => Element === "Abril";

console.log(arc.findIndex(isl)); //findIndex

/* Encontrar el indice de un objeto */

let gre = [
    { Nombre: "Keiberth", Apellido: "Areyan", Edad: 20 },
    { Nombre: "Lola", Apellido: "Selandi", Edad: 12 },
    { Nombre: "Franchesca", Apellido: "Guerrero", Edad: 16 },
    { Nombre: "Paola", Apellido: "Guerrero", Edad: 40 },
    { Nombre: "Rosa", Apellido: "Guerrero", Edad: 23 },
    { Nombre: "Guadalupe", Apellido: "Guerrero", Edad: 35 },
    { Nombre: "Katerina", Apellido: "Guerrero", Edad: 24 },
    { Nombre: "alberto", Apellido: "Guerrero", Edad: 5 },
  ];
  

const indice3 = gre.findIndex(producto => producto.Nombre === "Franchesca");

console.log(indice3);//findIndex



/* ------------------------------------------------ */



//reduce
//con forEach
let total = 0;
gre.forEach( pro => total += pro.Edad);
console.log(total)


//con Reduce
let resulta = gre.reduce( (a,b) => a + b.Edad,0)  //??????
console.log(resulta);       

/* ------------------------------------------------ */

let ml;

ml = gre.filter( (pro) => { return pro.Edad > 14})    //filter
mh = gre.filter( pro =>  pro.Nombre === "Keiberth")    //filter


console.log(ml);
console.log(mh);
/* ------------------------------------------------ */


          //find      

//con forEach
let ress = "";
gre.forEach((Name,id) => {
  if (Name.Nombre == "Lola") {
    ress = gre[id];
  }
});
console.log(ress);

//con find

const resss = gre.find(pro => pro.Nombre === "Lola");
console.log(resss);

/* ------------------------------------------------ */

const resd = gre.every(pro => pro.Edad <= 40);
console.log(resd); 
//every //Todos los elementos se deben de cumplir
//some //almenos uno de los elementos se deben de cumplir





/* 
console.log(arr4.pop(arr5));       //pop
console.log(arr4.push(arr5));       //push
console.log(arr4.shift(arr5));       //shift
console.log(arr4.unshift(arr5));       //unshift
console.log(arr4.reverse(arr5));       //reverse



console.log(arr4.keys(arr5));       //keys
console.log(arr4.values(arr5));       //values
console.log(arr4.map(arr5));       //map
console.log(arr4.slice(arr5));       //slice
console.log(arr4.sort(arr5));       //sort
console.log(arr4.splice(arr5));       //splice




console.log(arr4.from(arr5));       //from
console.log(arr4.indexOf(arr5));       //indexOf
console.log(isArray(arr5));       //isArray
console.log(arr4.join(arr5));       //join
console.log(arr4.lastIndexOf(arr5));       //lastIndexOf
console.log(arr4.reduceRight(arr5));       //reduceRight
console.log(arr4.toString(arr5));       //toString
    
 */
