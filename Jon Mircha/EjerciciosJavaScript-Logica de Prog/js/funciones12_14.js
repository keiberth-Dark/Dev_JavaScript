export class Funciones12_14{

    //Ejercicios de 12/14

    /* 12.Programa una función que determine si un número es primo 
    (aquel que solo es divisible por sí mismo y 1) o no, 
    pe. miFuncion(7) devolverá true. */
    numeroPrimo = (num = undefined) =>{
        if(isNaN(num)){
            console.warn("Ingresa un numero");
        }else{
            let count = 0;
            for(let i = 1; i <= num; i++){
                if(num%num==0){
                    count++;
                }
            }
            console.log("El numero es primo: "+(count===1));
        }
    }
       
    /* 13.Programa una función que determine si un número es
     par o impar, pe. miFuncion(29) devolverá Impar. */
    parImpar = (num = undefined) => 
        (isNaN(num))
            ?console.warn("Ingresa un numero")
            :(num == 0)
                ?console.log("El numero es Neutro")
                :(num%2==0)
                    ?console.log("El numero es Par")
                    :console.log("ELnumero es Impar");  

    /* 14.Programa una función para convertir grados Celsius 
    a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/
    gradosAFahrenheit = (temperature = undefined, conversion = "") =>
        (isNaN(temperature))
            ?console.warn("No ingresos una temperatura")
            :(conversion.toLowerCase() === "c" || conversion.toLowerCase() === "f")
                ?(conversion.toLowerCase() === 'c')
                    ?console.log(`${temperature} grados  Celsius es igual a ${(temperature*1.8)+32} grados Fahranheit`)
                    :console.log(`${temperature} grados  Fahranheit es igual a ${(temperature-32)/1.8} grados Celsius`)
                :console.warn("Ingresa el tipo de temperatura F/C");


}