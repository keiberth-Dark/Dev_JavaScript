export class Funciones18_20{
    
    /* 18.Programa una función que dada una cadena de texto 
    cuente el número de vocales y consonantes, 
    pe. miFuncion("Hola Mundo") 
    devuelva Vocales: 4, Consonantes: 5.  */
    vacalesConstantes = (text = "") =>
        (!text)
            ?console.log("Ingresa un texto")
            :console.log(`El texto ${text} tiene ${text.match(/a|e|i|o|u/gi).length} Vocales y ${text.match(/B|C|D|F|G|H|J|K|L|M|N|Ñ|P|Q|R|S|T|V|W|X|Y|Z/gi).length} consontes`);

    /* 19.Programa una función que valide que un texto sea un nombre 
    válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */
    validarNombre = (name = "") =>{
        if(!name){
            console.warn("Ingresa un texto")
        }else if(name.match(/ /) == null || name.match(/ /).length <= 4){
            let patron = /^[A-Za-z ]+$/;
            if(patron.test(name)){
                console.log(`El nombre ${name} es correcto`);
            }else{
                console.log(`El nombre ${name} no es correcto`);
            }
        }else{
            console.log(`El nombre ${name} no es correcto`);
        }

    }
    /* 20.Programa una función que valide que un texto sea un email 
    válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
    validarEmail = (email = "" ) =>{
        if(!email){
            console.warn("Ingresa un texto")
        }else{
            let patron = /^[A-Za-z._\d]+(@)[A-Za-z]{1,10}[.][A-Za-z]{2,3}[.]{0,1}[A-Za-z]{0,3}$/;
            if(patron.test(email)){
                if(email.charAt(email.length-1) !== "."){
                    console.log(`El nombre ${email} es correcto`);
                }else{
                    console.log(`El nombre ${email} no es correcto`);
                }
                
            }else{
                console.log(`El nombre ${email} no es correcto`);
            }
        }
    }

    
    
        
}