const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log(`Si es posible realizar la compra`);
} else if (!usuario && !puedePagar) {
    console.log(`No puedes comprar`);
} else if (!usuario) {
    console.log(`Inicia sesión o saca una cuenta`);
} else if (!puedePagar) {
    console.log(`Fondos insuficientes`);
}