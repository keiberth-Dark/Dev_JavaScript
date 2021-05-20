



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

for (let i = 0; i < carrito.length; i++) {
  console.log(`Nombre: ${carrito[i].Nombre} - Bs.${carrito[i].Precio}`)
}

console.log("----------------------------------------")

carrito.forEach(function(carrito) {
  console.log(`Nombre: ${carrito.Nombre}-Bs.${carrito.Precio}`)
});