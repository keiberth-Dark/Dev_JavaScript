export class Pelicula{
    constructor(idIMBD = "", titulo = "", director = "", anioEstreno = undefined, pais = undefined, genero = undefined , calfIMBD = undefined){
        
        this.idIMBD = idIMBD;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.pais = pais;
        this.genero = genero;
        this.calfIMBD = calfIMBD;

        if(this.validacionIdIMDM()){
            if(this.validacionTitulo()){
                if((this.validacionDirector())){
                    if(this.validacionAnioExtreno()){
                        if(this.validacionPais()){
                            if(this.validarCalfIMBD()){
                                this.validacionGenero();
                            }
                        }
                    }
                }
            }
        }                    
    }

    validacionIdIMDM(){
        let valido = false;
        const patronId = /^[A-Za-z]{2}\d{7}$/;
        (!this.idIMBD) 
            ?console.warn("Ingresa IdIMDM")
            :(!patronId.test(this.idIMBD))
                ?console.warn("El IdIMDM es incorrecto")
                :valido = true;

         return  valido;

    }
 
    validacionTitulo(){
        let valido = false;
        const patronTitulo = /^[a-zA-Z0-9\sñ]{3,100}$/;
        (!this.titulo) 
            ?console.warn("Ingresa Titulo")
            :(!patronTitulo.test(this.titulo))
                ?console.warn("El titulo es incorrecto")
                :valido = true;

        return  valido;
    }

    validacionDirector(){
        let valido = false;
        const patronDirector = /^[a-zA-Z\sñ]{1,50}$/;

        (!this.director) 
            ?console.warn("Ingresa el director")
            :(!patronDirector.test(this.director))
                ?console.warn("El director es incorrecto")
                :valido = true;

        return valido;
    }

    validacionAnioExtreno(){
        let valido = false;
        (this.anioEstreno === undefined)
            ?console.warn("Ingresa el año")
            :(this.anioEstreno < 1000 && this.anioEstreno > 2030)
                ?console.warn("El año es incorrecto")
                :valido = true;
        
        return valido;
    }

    validacionPais(){
        let valido = false;
        ((this.pais instanceof Array) === false)
            ?console.warn("Ingresa el/los pais en forma de arreglo")
            :valido = true;
        
        return valido;
    }

    validarCalfIMBD(){
        let valido = false;
        (this.calfIMBD === undefined)
            ?console.warn("Ingresa la calificaciòn")
            :(this.calfIMBD < 0 && this.calfIMBD > 10)
                ?console.warn("La calificacion esta fuera del rango")
                :valido = true;

        return valido;   
            
    }

    

    validacionGenero(){
        if((this.genero instanceof Array) === false){
            console.warn("Ingresa el/los genero en forma de arreglo");
        }else{
            for(let j = 0; j < this.genero.length; j++){
                if((this.genero[j].includes(Pelicula.generosAceptados)) === true){
                    console.log(`El genero ${genero[j]} no es aceptado`);
                }
            }

        }
        return true;
    }

 
    get getidIMBD(){return this.idIMBD}
    get getTitulo(){ return this.titulo;}
    get getDirector(){ return this.director;}
    get getAnioExtreno(){ return this.anioEstreno;}
    get getPais(){ return this.pais;}
    get getGenero(){ return this.genero;}
    get getCalfIMBD(){ return this.calfIMBD;}

    static get generosAceptados (){
        return["Action", "Adult", "Adventure", "Animation", "Biography",
        "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy",
       "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", 
       "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", 
       "Talk-Show", "Thriller", "War", "Western"];
    }

    fichaTecnica = (pelicula) => {
        console.log(`Ficha tecnica
        IDIMDM: ${pelicula.getidIMBD} 
        Titulo: ${pelicula.getTitulo}
        Director: ${pelicula.getDirector}
        Año Extreno: ${pelicula.getAnioExtreno}
        Pais: ${pelicula.getPais.join(" - ")}
        Genero: ${pelicula.getGenero.join( " - ")}
        Calificacion: ${pelicula.getCalfIMBD}`);
    }

    imprimirFichaTecnica(arrPelicula = ""){
        arrPelicula.forEach(element => {
            this.fichaTecnica(element);            
        });
    }

}




