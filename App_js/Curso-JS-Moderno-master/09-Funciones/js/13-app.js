const reproductor = {
    reproducir: cancion => `Reproduciendo canción ${cancion}`,
    
    pausar: () => `pausando...`,
    
    borrar: cancion => `Borrando canción... ${cancion}`,
    
    crearPlaylist: nombre => `La Playlist "${nombre}" fue creada exitosamente`,
    
    reproducirPlaylist: nombre => `reproduciendo la Playlist "${nombre}"`,
    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
    
};

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

console.log(reproductor.reproducir('"Toda la vida"'));
console.log(reproductor.reproducir('"Con todos menos conmigo"'));

console.log(reproductor.pausar());

// reproductor.borrar = function(cancion){
//     console.log(`Borrando canción... ${cancion}`);
// };

console.log(reproductor.borrar('"Pasame la botella"'));
const playList = 'Favoritas';

console.log(reproductor.crearPlaylist(playList));
console.log(reproductor.reproducirPlaylist(playList));