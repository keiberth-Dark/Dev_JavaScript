// Eliminar elementos de localStorage

localStorage.removeItem('nombre');

// Actulizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

// Eliminar todo el localStorage
// localStorage.clear();