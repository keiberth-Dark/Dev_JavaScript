export class Funciones24_26{

    /* 24.Programa una función que dado un arreglo de números 
    devuelva un objeto con dos arreglos, el primero tendrá los 
    numeros ordenados en forma ascendente y el segundo de forma 
    descendiente, pe. miFuncion([7, 5,7,8,6]) 
    devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */
    ascDesc = (arreglo) => {
        if(!(arreglo instanceof Array)){
            console.warn("Ingresa una array")
        }else{
            let correct = 0;
            for(let i = 0; i < arreglo.length; i++){
                if(typeof(arreglo[i]) !== "number"){
                    console.warn("Ingresa solo numeros");
                }else{
                    correct++;
                }
            }
            if(correct === arreglo.length){
                let ordenado = {
                    asc:arreglo.map(el => el).sort(this.menorAMayor),
                    desc:arreglo.map(el => el).sort(this.menorAMayor).reverse()

                }
                console.log(`Asendente:${ordenado.asc}, Desedente : ${ordenado.desc} `);
            }

        } 
    }

    menorAMayor(a,b){return a - b}

    /* 25.Programa una función que dado un arreglo de elementos, 
    elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
    devolverá ["x", 10, 2, "10", true]. */
    eliminarDuplicados = (arreglo = undefined) =>{
        if(!(arreglo instanceof Array)){
            console.warn("Ingresa una array")
        }else{
            for(let i = 0; i < arreglo.length; i++){
                for(let j = i+1; j < arreglo.length; j++){
                    if(arreglo[i] === arreglo[j]){
                        arreglo.splice(j,1)
                    }
                }
            }
            console.log("El arreglo sin elementos duplicados: "+arreglo);
        }
        
    }

    /* 26) Programa una función que dado un arreglo de números 
    obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) 
    devolverá 4.5. */
    promedio(numbers = undefined){
        if(!(numbers instanceof Array)){
            console.warn("Ingresa una array")
        }else{
            let average = 0;
            let correct = 0;
            for(let i = 0; i < numbers.length; i++){
                if(typeof(numbers[i]) !== "number"){
                    console.warn("Ingresa solo numeros");
                }else{
                    average += numbers[i];
                    correct ++;
                }
            }
            if(numbers.length == correct){
                console.log(`EL promedio de ${numbers} es ${average/numbers.length}`);
            }


        }
    }

}