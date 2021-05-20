const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicar');
    }
});


// console.log(aplicarDescuento);

aplicarDescuento
    .then( resultado => console.log(resultado))
    .catch( error => {
        console.log(error);
    })

// hay 3 valores posibles... 
// fulfilled - el promise se cumplió
// rejected - El Promise no se cumplió 
// pending - No se ha cumplido y tambpoco fue rechazado