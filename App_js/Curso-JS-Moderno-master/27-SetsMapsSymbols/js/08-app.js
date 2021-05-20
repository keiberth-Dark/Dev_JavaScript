const ciudades = ['Londres', 'New York', 'Madird', 'Paris'];
const ordenes = new Set([123, 231,131,102]);
const datos = new Map();

datos.set('Nombre', 'Marco');
datos.set('profesion', 'Desarrollador Web');


// Iteradores

//Entries
// entry siempre nos devuelve una llave y valor d

for(let entry of ciudades.entries()){
    console.log(entry);
}

for(let entry of ordenes.entries()){
    console.log(entry);
}

for(let entry of datos.entries()){
    console.log(entry);
}

// Values Iterator

for(let value of ciudades.values()){
    console.log(value);
}

for(let value of ordenes.values()){
    console.log(value);
}

for(let value of datos.values()){
    console.log(value);
}

// Keys Iterator
// Si no existen llaves le va asignar el valor
for(let keys of ciudades.keys()) {
    console.log(keys);
}

for(let keys of ordenes.keys()) {
    console.log(keys);
}

for(let keys of datos.keys()) {
    console.log(keys);
}

// Iterador por Dafault
for( ciudad of ciudades){
    console.log(ciudad);
}

for( orden of ordenes){
    console.log(orden);
}

for( dato of datos){
    console.log(dato);
}