// Como funciona un iterador

function crearIterador(carrito){
    let i = 0;

    return {
        siguiente: () => {
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['producto 1', 'producto2', 'producto3'];

// Ulitilar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());