// window.onload = () => {
//   console.log('Ventana Lista');
// };

// Lo mismo que lo anterior
self.onload = () => {
  console.log('Ventana Lista');
};

window.nombre = 'Monitor 20 pulgada';

const producto = {
  precio: 30,
  displonible: true,
  mostrarInfo: function () {
    return `El Producto: ${self.nombre}`;
  },
};

console.log(producto.mostrarInfo());
