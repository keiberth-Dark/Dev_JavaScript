




const carrito = [
  {Nombre: "Smart TV", Precio:500} ,
  {Nombre: "Aipad", Precio:800} ,
  {Nombre: "Asus Gaming", Precio:1500},
  {Nombre: "ZTE", Precio:300} ,
  {Nombre: "Samsung A10", Precio:1200} ,
  {Nombre: "TV", Precio:450} ,
  {Nombre: "Xbox 360", Precio:600} ,
  {Nombre: "Nintendo Swift", Precio:350} 
];

const newCarrito1 = carrito.map(function(carrito) {
  return `Nombre: ${carrito.Nombre}-Bs.${carrito.Precio}`
});

const newCarrito2 = carrito.forEach(function(carrito) {
  return `Nombre: ${carrito.Nombre}-Bs.${carrito.Precio}`
});

console.log(newCarrito1);
console.log(newCarrito2);


/* .map crea un nuevo arreglo mientras forEach no */