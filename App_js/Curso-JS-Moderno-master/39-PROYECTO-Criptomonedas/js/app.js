const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
  moneda: '',
  criptomoneda: '',
};

// Crear un Promise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener('DOMContentLoaded', () => {
  consultarCriptomonedas();

  formulario.addEventListener('submit', submitFormulario);

  criptomonedasSelect.addEventListener('change', leerValor);
  monedaSelect.addEventListener('change', leerValor);
});

function consultarCriptomonedas() {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

  mostrarSpinner();

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCriptomonedas(resultado.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement('option');
    option.value = Name;
    option.textContent = FullName;
    criptomonedasSelect.appendChild(option);
  });
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
  e.preventDefault();

  // validar
  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === '' || criptomoneda === '') {
    mostrarAlerta('Ambos campos son necesarios');
    return;
  }

  // Consultar la API con los resultados
  consultarAPI();
}

function mostrarAlerta(msg) {
  const existeError = document.querySelector('.error');

  if (!existeError) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');

    // Mensaje de error
    divMensaje.textContent = msg;
    formulario.appendChild(divMensaje);

    // Borrar el mensaje despues de un tiempo
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((cotizacion) => {
      mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    });
}

function mostrarCotizacionHTML(cotizacion) {
  limpiarHTML();

  const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR } = cotizacion;

  const precio = document.createElement('p');
  precio.classList.add('precio');
  precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement('p');
  precioAlto.innerHTML = `El precio más alto del día: <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement('p');
  precioBajo.innerHTML = `El precio más bajo del día: <span>${LOWDAY}</span>`;

  const cambio24 = document.createElement('p');
  cambio24.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

  const actualizacion = document.createElement('p');
  actualizacion.innerHTML = `Ultima actualización: <span>${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(cambio24);
  resultado.appendChild(actualizacion);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarSpinner() {
  limpiarHTML();

  const spinner = document.createElement('div');
  spinner.classList.add('spinner');

  spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
  `;

  resultado.appendChild(spinner);
}
