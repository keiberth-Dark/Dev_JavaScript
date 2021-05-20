const nombre = "Hola";
const precio = 20;


//la palabra this hace referencia a las propiedades del mismo objeto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostraInfo: function () {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

const producto2 = {
    nombre: "Tablet",
    precio: 30230,
    disponible: true,
    mostraInfo: function () {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

producto.mostraInfo();
producto2.mostraInfo();
