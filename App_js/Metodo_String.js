





const Nombre = "Katalina " ,
Apellido = "Romero ",
lorem = "La vaca lola come en las tardes",
Exp = /ta/i;
C = "///-------------Separador-------------///" ;



                    /* -------------Todos los metodos String-------------*/

console.log(Nombre.charAt(4));                 //Metodo charAt
console.log(Nombre.charCodeAt(2));             //Metodo charCodeAt    //????
console.log(Nombre.concat(Apellido));          //Metodo concat
console.log(C); 

console.log(lorem.endsWith("tardes"));         //Metodo endsWith
console.log(String.fromCharCode(65,66,67));    //Metodo fromCharCode
console.log(Nombre.includes("Ka"));            //Metodo includes
console.log(C); 

console.log(Nombre.indexOf("a"));               //Metodo indexOf
console.log(Nombre.lastIndexOf("a"));           //Metodo lastIndexOf
console.log(Nombre.localeCompare());            //Metodo localeCompare  //????
console.log(C); 

console.log(Nombre.match("tal"));                   //Metodo match
console.log(Nombre.repeat(2));                      //Metodo repeat
console.log(Nombre.concat(Apellido).repeat(2));     //Metodo repeat
console.log(Nombre.replace("l","R"));               //Metodo replace
console.log(C); 


console.log(Nombre.search(Exp));             //Metodo search
console.log(Nombre.slice(4,8));              //Metodo slice
console.log(Nombre.split("tali"));           //Metodo split
console.log(C); 

console.log(lorem.startsWith("vaca",3));             //Metodo startsWith
console.log(Nombre.substr(2,7));                     //Metodo substr
console.log(Nombre.substring(4,8));                  //Metodo substring
console.log(C); 


console.log(Nombre.toLowerCase());                 //Metodo toLowerCase
console.log(Nombre.toUpperCase());                 //Metodo toUpperCase
/* 
console.log(Nombre.toLocaleLowerCase());           //Metodo toLocaleLowerCase
console.log(Nombre.toLocaleUpperCase());           //Metodo toLocaleUpperCase 
*/
console.log(Nombre.toString());                    //Metodo toString  //?????
console.log(C); 

const NombreT_ = "     Renata",
      NombreT__ = "Renata     ",
      NombreT___ = "     Renata     ";


      /* no se puede persivi pero si quitas el metodo veras la diferencia  */
console.log(NombreT___.trim());                       //Metodo trim
console.log(NombreT_.trimStart());                    //Metodo trimStart
console.log(NombreT__.trimEnd());                     //Metodo trimEnd
console.log(NombreT___.valueOf());                    //Metodo valueOf  //????

console.log(C); 


console.log(Nombre);           
console.log(Apellido);           

