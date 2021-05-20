//Metodos de propiedad

const reproductor = {
    reproducir: function (cancion) {
        console.log(`Reproduciendo canción ${cancion}`);
    },
    pausar: function () {
        console.log(`pausando...`);
    },
    borrar: function (cancion) {
        console.log(`Borrando canción... ${cancion}`);
    },
    crearPlaylist: function (nombre) {
        console.log(`La Playlist "${nombre}" fue creada exitosamente`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`reproduciendo la Playlist "${nombre}"`);
    }
};

reproductor.reproducir('"Toda la vida"');
reproductor.reproducir('"Con todos menos conmigo"');

reproductor.pausar();

// reproductor.borrar = function(cancion){
//     console.log(`Borrando canción... ${cancion}`);
// };

reproductor.borrar('"Pasame la botella"');

const playList = 'Favoritas';

reproductor.crearPlaylist(playList);
reproductor.reproducirPlaylist(playList);