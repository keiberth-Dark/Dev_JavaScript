// Switch case

const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        puntoDeVenta();
        break;

    default:
        console.log(`Aún no has seleccionado un método de pago o método de pago no soportado`);
        break;
}


function puntoDeVenta() {
    console.log(`Ejecutando punto de venta`);
}