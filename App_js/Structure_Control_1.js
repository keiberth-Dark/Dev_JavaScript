/* If ELSE */

//Siempre se ejecutara la primera que sea correcta
const dinero = 360,
  totalPagar = 200,
  tarjeta = false;

if (dinero >= totalPagar) {
  console.log("Podemos pagar");
} else if (tarjeta) {
  console.log("podemos pagar con tarjeta");
} else {
  console.log("no podemos pagar");
}

/* Switch */

const metodoPago = "tarjeta";

switch (metodoPago) {
  case "Efectivo":
    console.log(`Pagaste con: ${metodoPago}`);
    break;
  case "cheque":
    console.log(`Pagaste con: ${metodoPago}`);
    break;
  case "tarjeta":
    console.log(`Pagaste con: ${metodoPago}`);
    break;
  default:
    console.log("no haz seleccionado el metodo de pago");
    break;
}

/* && */

const usuario = false,
  puedePagar = false;

if (usuario && puedePagar) {
  console.log("Podemos pagar");
}else if ((puedePagar && usuario) === false) {
  console.log("lo siento no tienes saldo suficiente y no eres vip");

} else if (!usuario) {
  console.log("Lo siento pero no eres usuario vip");
} else if (!puedePagar) {
  console.log("lo siento no tienes saldo suficiente");
}

/* || */

const efec = 300,
      cre = 400,
      disponible = efec + cre,
      totalP = 600;

if (efec > totalP || cre > totalP || disponible > totalP) {
  console.log("podemos Pagar");
}else {
  console.log("no podemos pagar");
}
