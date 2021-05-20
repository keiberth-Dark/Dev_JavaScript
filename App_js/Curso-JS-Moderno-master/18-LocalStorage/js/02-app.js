const nombre = localStorage.getItem('nombre');
console.log(nombre);


// Para convertir un string a un objeto se usa JSON.parse()
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));


const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
