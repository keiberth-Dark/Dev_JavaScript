localStorage.setItem('nombre', 1);
// Local storage solo alamacena los datos como string
// para leer un objeto se usa JSON.stringify().

const producto = {
    nombre: 'Monitor 24 Pulgadas',
    precio: 300
};

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
