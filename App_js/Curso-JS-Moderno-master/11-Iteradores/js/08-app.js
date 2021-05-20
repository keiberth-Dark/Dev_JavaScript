// For in opera sobre objetos
// For of opera sobre un arreglo

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
};

// for(const propiedad in automovil){
//     console.log(`${propiedad}: ${automovil[propiedad]}`);
// }

for(const[llave, valor] of Object.entries(automovil)){
    console.log(`${llave}: ${valor}`);
}