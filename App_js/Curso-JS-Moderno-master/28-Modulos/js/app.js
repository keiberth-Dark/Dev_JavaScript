import nuevaFuncion, { ahorro, Cliente, mostrarInformacion, nombreCliente as nuevoCliente, tieneSaldo} from './cliente.js';
import { Empresa } from './empresa.js';

nuevaFuncion();

console.log(nuevoCliente);
console.log(ahorro);

console.log(mostrarInformacion(nuevoCliente, ahorro));

tieneSaldo(ahorro);

const clienteNuevo = new Cliente(nuevoCliente, ahorro);


console.log(clienteNuevo.mostrarInformacion());

// Importar empresa
const empresa = new Empresa('Codigo Facilito', 500, 'Desarrollo Web');

console.log(empresa.mostrarInformacion());