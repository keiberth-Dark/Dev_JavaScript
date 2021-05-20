export class Funciones9_11{
    //Ejercios 9-11

    /* 9.Programa una función que obtenga un numero aleatorio 
    entre 501 y 600. */
    numeroRandom500_600 = () =>
    console.log("Numero Random entre 501 a 600: "+parseInt((Math.random()*(600-500))+500));
    
    /* 10.Programa una función que reciba un número y evalúe 
    si es capicúa o no (que se lee igual en un sentido que en otro),
    pe. miFuncion(2002) devolverá true. */
    nuemeroCapicua = (num = undefined)  =>{
        if(isNaN(num)){
            console.warn("Ingresa un numero");
        }else{
            let result = this.invertir(num+"") === (num+"");
            console.log("El numero es capicua: "+result);
        }
    }

    /* 11.Programa una función que calcule el factorial de 
    un número (El factorial de un entero positivo n,
    se define como el producto de todos los números 
    enteros positivos desde 1 hasta n), pe. miFuncion(5) 
    devolverá 120. */
    factorial = (num) =>{
        if(isNaN(num)){
            console.warn("Ingresa un numero");
        }else{
            let result = 1;
            for(let i = 2; i <= num; i++){
                result *= i;
            }
            console.log(`EL factorial del numero ${num} es ${result}`);
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