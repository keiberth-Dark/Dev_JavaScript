window.addEventListener ('scroll', () => {
    // nos indica en que pixel estamos al hacer scroll
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    // como identificar un bloque de nuestra pagina web 
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    if (ubicacion.top < 784) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, damas scroll');
    }

});