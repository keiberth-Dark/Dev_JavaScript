export class Funciones5_8{
    //Ejercicios 5-8       


    /* 5.Programa una función que invierta las palabras de una cadena 
    de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
    invertirTexto = (text = "") =>
        (!text)
            ?console.warn("No ingresos texto") : console.log("Texto Invertico: "+this.invertir(text));
        
    /* 6.Programa una función para contar el número de veces 
    que se repite una palabra en un texto largo, 
    pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
    numeroPalabras = (text = "") =>
        (!text)
            ?console.warn("No ingresos texto") : console.log("Numero de palabras: "+text.split(' ').length);

    /* 7.Programa una función que valide si una palabra o
     frase dada, es un palíndromo (que se lee igual en un sentido 
        que en otro), pe. mifuncion("Salas") devolverá true. */
    textoPolindromo = (text = "" ) =>{
        if(!text){
            console.warn("No ingresos texto");
        }else{
            let result = this.invertir(text).trim() === text.trim();
            console.log("El texto es  palíndromo: "+result);
        }
        
    }

    /* 8.Programa una función que elimine cierto patrón de caracteres 
    de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y 
    xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
    eliminarPatron = (text = "", patron = undefined ) => {
        if(text.length <= 1 ){
            console.warn("No ingresos texto")
        }else if(patron == undefined){
            console.warn("No se introducion patron");
        }else{
            console.log("Texto remplazado: "+text.replaceAll(patron,""));;
        }       
    }

    invertir(text){
        let textInv="";
        for(let letter of text){
            textInv = letter+textInv;
        }
        return textInv;
    }


}
    