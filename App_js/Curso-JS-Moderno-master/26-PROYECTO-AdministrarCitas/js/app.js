// Variable de Campos
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
// Constante de tiempo en settimeout 
const tiempo = 1000;

// Variable editando
let editando;

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');


// Class
class Citas {
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        // console.log(this.citas);
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id != id)
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        

    }
}

class UI {
    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.className = ('text-center alert d-block col-12');

        // Agregar clase en base al tipo de console.error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Mostrarlo en el HTML
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Borrar el Mensaje en un tiempo
        setTimeout(() => {
            divMensaje.remove();
        }, tiempo);

    }

    imprimirCitas({citas}){
        this.limpiarHTML();
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

             const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas: </span> ${sintomas}
            `;

            // Boton para eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            btnEliminar.onclick = () => eliminarCita(id);

            // Boton para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>';
            btnEditar.onclick = () => cargarEdicion(cita);


            // Agregar los parrafos a divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);
    

            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);

        })
    } 
    
    limpiarHTML(){
    while (contenedorCitas.firstChild) {
        contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
}
}

// Instanciar las clases
const ui = new UI();
const administrarCitas = new Citas();

// Registra Eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// Objeto con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}


// Agrega datos al objeto de cita
function datosCita(e){
    citaObj[e.target.name] = e.target.value;    
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();
    // Extraer la informacvión del objeto de cita 
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // validar
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    if (editando) {
        ui.imprimirAlerta('Se modificó correctamente');

        // Pasar el objeto de la cita a edición
        administrarCitas.editarCita({...citaObj});


        // Cambiar el texto del boton 
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        // Quitar modo edición
        editando = false;

    } else {
        // Generar un id 
        citaObj.id = Date.now();

        // creando una nueva cita
        administrarCitas.agregarCita({...citaObj});

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Agregado Correctamente');
    }

    

    // Reiniciar el objeto para la validación
    reiniciarObjeto();

    // Reinicia el formulario
    formulario.reset();

    // Mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

// Elimina una cita
function eliminarCita(id) {
    // Eliminar la cita
    administrarCitas.eliminarCita(id);
    // Muestre un mensaje
    ui.imprimirAlerta('El registro se borro con exito');
    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);
}

// Carga los datos y el modo edición
function cargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;    
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
    

    // Cambiar el texto del botón
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    // convirmar variable editando
    editando = true;

}

