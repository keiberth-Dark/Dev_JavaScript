const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);


console.log(cliente.size);

console.log(cliente.has('nombre'));

// obtener el valor de un elemento
console.log(cliente.get('nombre'));

// eliminar un elemento
cliente.delete('saldo');

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));

// limpiar todos los elementos
cliente.clear();
console.log(cliente);

const paciente = new Map([['Nombre', 'paciente'],['cuarto','7B']]);

paciente.set('Dr', 'Dr. Juan Alberto González');
paciente.set('Nombre', 'Juan Pérez')

console.log(paciente);

// Iteración de marginTop: 
paciente.forEach((datos,index) => {
    console.log(`${index}: ${datos}`);
});
