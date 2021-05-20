

IniciandoApp();

function IniciandoApp() {
  console.log("Iniciando App....");
  SegundaApp();
}

function SegundaApp() {
  console.log("desde la segunda function App....");
}

/* ------------------------------------------ */
const fun = function(a, b) {
  return a + b ;
}

const Suma = fun(3,5);

console.log(Suma)


let total = 0;

const addCarrito = function(precio){
  return total += precio;
}

const calcularImpuesto = function(total){
  return total * 1.15;
}

total = addCarrito(50);
total = addCarrito(500);
total = addCarrito(150);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalPagar}`)
console.log(total)


