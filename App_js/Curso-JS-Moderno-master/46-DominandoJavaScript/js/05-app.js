function persona(el1, el2) {
  console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
  nombre: 'Marco',
};

const musicaFavorita = ['Heavy Metal', 'Rock'];

// Con call debes declarar cada elemento del arreglo
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// Con apply no es necesario declarar cada elemento del arreglo
persona.apply(informacion, musicaFavorita);

// Con bind es lo mismo que call solo que el resultado es enviado a una función.
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();
