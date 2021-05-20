let resultado = document.getElementById('Resultado');
let entrada = document.querySelector('input');

function raizCuadrada(){
    resultado.style.display = 'block';
    let valorEntrada = entrada.value;
    let cadenaDeTexto = 'La Raiz de ' +
    valorEntrada + ' es:' + Math.sqrt(valorEntrada)+ ' Por que'+
    ' ' + Math.sqrt(valorEntrada)+ '*' +
    Math.sqrt(valorEntrada)+'='+valorEntrada;

    return resultado.innerText = cadenaDeTexto;
}