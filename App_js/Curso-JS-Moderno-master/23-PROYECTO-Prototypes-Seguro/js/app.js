// Variables globales
const formulario = document.querySelector("#cotizar-seguro");
const segundos = 1000;

// Constructor
function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// Realizar la cotización con los datos
// En este prototype no se usa Arrowfunction porque tenemos elementos en el objeto
Seguro.prototype.cotizarSeguro = function(){
    /*
        1= Americano 1.15
        2= Asiatico 1.05
        3= Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }
    

    // Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    
    // Cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;
    
    /*
        Si el seguro es básico se multiplica por un 30% más
        Si el seguro es completo se multiplica por un 50% más
    */

    if (this.tipo === 'basico') {
        cantidad *= 1.3;
    } else {
        cantidad *= 1.5;
    }

    return cantidad;
 };

function UI(){}

// Llenar las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i >= min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

// Muestra alertas en pantalla
// Usamos en este un arrowfunction ya que no tenemos ningun elemento en nuestro constructor.
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar mensaje en HTML
    // LLamamos la variable global formulario.
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove(); // Borra el mensaje despues de 3 segundos
    }, segundos);

};

UI.prototype.mostrarResultado = (total, seguro) => {
    const {marca, year, tipo} = seguro;
    // nombrar la marca
    let origen;
    let textoTipo;

    switch (marca) {
        case "1":
            origen = "Americano";
            break;
        case "2":
            origen = "Asiatico";
            break;
        case "3":
            origen = "Europeo";
            break;
    
        default:
            break;
    }

    // corregir la palabra basico con acento
    if (tipo === 'basico') {
        textoTipo = 'básico';
    } else {
        textoTipo = 'completo';
    }

    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${origen}</span></p>
        <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${textoTipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    
    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none'; // Se borra el spinner
        resultadoDiv.appendChild(div); // Se muestra el resultado
    }, segundos);
};


// Instanciar unicodeBidi: 
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
});

eventListeners();

function eventListeners() {
    // const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener('submit', cotizarSeguro);
}

// Al ser un evento agregamos e
function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    
    // leer el año seleccionado
    const year = document.querySelector('#year').value;

    // leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    } 
    
    ui.mostrarMensaje('Cotizando...', 'exito');

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }

    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();
    
    // Utilizar el prototype que va a cotizar.
    ui.mostrarResultado(total, seguro);
}