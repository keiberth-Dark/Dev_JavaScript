// WeakSet
const weakset = new WeakSet();

const cliente = {
    nombre: 'Marco',
    saldo: 500
}

weakset.add(cliente);

console.log(weakset);