const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el /id_${id}/`);
  },
  pausar: function () {
    console.log(`pausando cancion`);
  },
  CrearPlay: function (nombre) {
    console.log(`Creando la pleylist de ${nombre}`);
  },
  borrar: function (id = "") {
    console.log(`borrar cancion /${id}/`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(462);
reproductor.reproducir(78791);
reproductor.pausar();

reproductor.borrar(34);
reproductor.CrearPlay("Twenty one Pilots");
reproductor.CrearPlay("Kiss");

console.log("------------------------");

const Repro = {
  reproducir: (id) => console.log(`Reproduciendo cancion con el /id_${id}/`),
  pausar: () => console.log(`pausando cancion`),
  CrearPlay: nombre => console.log(`Creando la pleylist de ${nombre}`),
  borrar: (id = "") => console.log(`borrar cancion /${id}/`),};

Repro.reproducir(623); 
Repro.pausar();
Repro.CrearPlay("Hola");
Repro.borrar("HOLA");


