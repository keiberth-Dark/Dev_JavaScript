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

console.log(producto);

console.log(producto.informacion.fabricacion.pais);