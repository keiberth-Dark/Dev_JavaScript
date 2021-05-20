// Creamos nuestra Clase

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const marco = new Cliente('Marco',500);


// Función para desplegar el cliente
function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de \$${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de \$${saldo} y pertenece la categoría ${categoria}`;
}



console.log(formatearCliente(marco));

function Empresa(nombre, saldo, categoria){
    this.nombre    = nombre;
    this.saldo     = saldo;
    this.categoria = categoria;
}

const ccm = new Empresa('Código con Marco', 5000, 'Cursos en línea');
console.log(formatearEmpresa(ccm));

