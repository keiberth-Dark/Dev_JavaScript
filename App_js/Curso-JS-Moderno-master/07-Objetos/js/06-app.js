const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medida: {
            peso: "1 kg",
            medida: "1 m"
        },
        fabricacion: {
            pais: "China"
        }
    }
};

const {nombre, informacion, informacion:{fabricacion , fabricacion: {pais}}}= producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);