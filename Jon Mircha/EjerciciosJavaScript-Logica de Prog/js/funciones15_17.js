
export class Funciones15_17{

    //Ejercicios de 15/17

    /*15.Programa una función para convertir números de base binaria 
    a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */
    decimalABinarioViseversa = (num = undefined, base = undefined) =>{
        if(isNaN(num) || num < 0){
            console.warn("Ingresa un valor");
        }else if(!/(2|10)/.test(base)){
            console.warn("Ingrea una natacion valida 2/10");
        }else if(base === 2){
            let binary = 1;
            let decimal = 0;
            num =  num+"";
            for(let i = num.length; i >= 0; i--){
                if(num.charAt(i-1) === "1"){
                    decimal +=binary;
                }
                binary +=binary;
                
            } 
            console.log(`${decimal} base ${10}`);     
        }else{
            console.log(`${num.toString(2)} base ${2}`);
        }
    }

    /* 16.Programa una función que devuelva el monto final 
    después de aplicar un descuento a una cantidad dada, 
    pe. miFuncion(1000, 20) devolverá 800. */
    descuento = (amount = undefined, percent = undefined) =>
        (isNaN(amount) || amount < 0)
            ?console.log("Ingresa una cantidad")
            :(isNaN(percent) || percent < 0 && percent > 100 )
                ?console.log("Ingresa un porcentaje correcto")
                :console.log(`El ${percent}% descuento de ${amount} es ${(amount * (100-percent)) / 100}`);



    /* 17.Programa una función que dada una fecha válida
    determine cuantos años han pasado hasta el día de hoy, 
    pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */
    fechaanios = (date) =>
        (!(date instanceof Date))
            ?console.warn("Escribe unsa fecha valida")
            :(date.getFullYear() < 0 && date.getFullYear() >= 2020)
                ?console.warn("Ingresa el año correctamente")
                :(date.getMonth() < 0 && date.getMonth() >= 12 )
                    ?console.warn("Ingresa la fecha corretamente")
                    :(date.getDate() < 0 && date.getDate() >= 31 )
                        ?console.warn("Ingresa el dia corretamente")
                        :((new Date(2020,9,9) > (date + new Date(2020,9,9))))
                            ?console.log("Han pasado: "+(2020 - date.getFullYear()))
                            :console.log("Han pasado: "+(2020 - date.getFullYear()-1));
}