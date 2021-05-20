

export class Funciones1_4{

    //Ejercicios  1-4 

   /*1.Programa una función que cuente el número de caracteres 
   de una cadena de texto, pe. miFuncion("Hola Mundo")
   devolverá 10.*/
   caracteresTexto = (text="") => (!text) ?console.warn("No ingresos texto"):console.log("Numeros de caracteres:",text.length);
   
   /*2.Programa una función que te devuelva el texto recortado según 
   el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) 
   devolverá "Hola".*/
   recorteTexto = (text="",numeroCaracteres)=>
      (!isNaN(text))
      ?console.warn("No ingresos texto") : (numeroCaracteres === undefined)
         ?console.warn("No ingreso longitud") : (numeroCaracteres < 0)
            ?console.warn("El numero deve ser mayor a cero") : (numeroCaracteres <= text.length)
               ?console.log("Texto selecionado: "+ text.substring(0,numeroCaracteres)) : console.warn("El numero debe ser menor al texto");
   
   
   /*3.Programa una función que dada una String te devuelva un Array de
   textos separados por cierto caracter, pe. miFuncion
     ('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
   separarTexto = (text="",separar = undefined)=>
      (text.length <= 1 )
         ?console.warn("No ingresos texto") : (separar != undefined)
            ?console.log("Texto separado: "+  text.split(separar)) : console.warn("No ingreso separador"); 

   
   /*4.Programa una función que repita un texto X veces, pe. 
   miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo 
    Hola Mundo.   */
   repetirTexto = (text="", numeroVeces=undefined)=>
      (!isNaN(text))
      ?console.warn("No ingresos texto") : (numeroVeces === undefined)
            ?console.warn("No ingreso numero de veces repetidas") : (numeroVeces > 0)
            ?console.log("Repiticion de texto: "+ text.repeat(numeroVeces)) : console.warn("El numero deve ser mayor a cero"); 













}