const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callBack) {
    setTimeout(() => {
        paises.push(pais);
        callBack();
    }, 2000);
}

function mostraPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

mostraPaises();

nuevoPais('Alemania', mostraPaises);