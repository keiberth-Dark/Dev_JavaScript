const usuario = {
  nombre: 'Marco',
  edad: 48,
  informacion() {
    console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
  },
  mascota: {
    nombre: 'Rocco',
    edad: 10,
    informacion() {
      console.log(
        `El nombre de mi mascota es ${this.nombre} y su edad es de ${this.edad} años`
      );
    },
  },
};

// Tenemos que indicarle en donde va obtener los datos. Para eso se usa la palabra reservada this.

usuario.informacion();

usuario.mascota.informacion();
