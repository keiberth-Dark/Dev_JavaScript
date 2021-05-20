//forEach

const pedientes = [
  "Hola",
  "Que",
  "Haces",
  "quiero",
  "Hablar",
  "Con",
  "Vos",
];

//pedientes.forEach((pendiente) => console.log(pendiente));

pedientes.forEach((h,i,a) => {
  console.log(i,h);
});


console.clear();

//for-of para array y for-in

//for of

for (let pendiente of pedientes) {
  console.log(pendiente);
}

console.clear();

//for in

const auto = {
  modelo:"Camaro",
  Año:1950,
  Motor: "6.5",
}

for (const cars in auto) {
  console.log(`llaves ${cars}`)
}
