export class Funciones21_23{

    /* 21.Programa una función que dado un array numérico devuelve 
    otro array con los números elevados al cuadrado, 
    pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */
    elevarCuadrado = (numbers = undefined) => {
        if(!(numbers instanceof Array)){
            console.warn("Ingresa una array")
        }else{
            const results = [];
            for(let i = 0; i < numbers.length; i++){
                if(typeof(numbers[i]) !== "number"){
                    console.warn("Ingresa solo numeros");
                }else{
                    results.push(Math.pow(numbers[i],2));
                }
                
            }
            if(results.length === numbers.length)
                console.log(`El array ${numbers} al cuadrado es ${results}`)      
        }
    }


    /* 22.Programa una función que dado un array devuelva el número mas 
    alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60])
    devolverá [99, -60]. */
    menorMayorArreglo = (numbers = undefined) => {
        if(!(numbers instanceof Array)){
            console.warn("Ingresa una array")
        }else{
            let mayor  ,menor;
            for(let i = 0; i < numbers.length; i++){
                if(typeof(numbers[i]) !== "number"){
                    console.warn("Ingresa solo numeros");
                }else{
                    if(i==0){
                        mayor = numbers[i];
                        menor = numbers[i];
                    }else{
                        if(numbers[i] > mayor){
                            mayor = numbers[i];
                        }
                        if(numbers[i] < menor){
                            menor = numbers[i];
                        }
                    }
                }
            }

            console.log("El arrglo el mayor y el menor son: "+[mayor,menor]);
            
        }
    }

    /* 23.Programa una función que dado un array de números devuelva un 
    objeto con 2 arreglos en el primero almacena los números pares y 
    en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
    devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
    paresImparesArreglos = (numbers = undefined) =>{
        if(!(numbers instanceof Array)){
            console.warn("Ingresa una array")
        }else{
            const pares = [], impares = [];
            for(let i = 0; i < numbers.length; i++){
                if(typeof(numbers[i]) !== "number"){
                    console.warn("Ingresa solo numeros")
                }else{
                    (numbers[i]%2==0)
                        ?pares.push(numbers[i])
                        :impares.push(numbers[i]);
                }
            }
            if(numbers.length === (pares.length+impares.length)){
                console.log(`Los numeros pares son ${pares} los numeros impares ${impares}`);      
            }
            
        }
    }

 
        
            
}