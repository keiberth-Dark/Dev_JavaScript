

    //los export default solo permite que sea una no 2 ni 3 solo 1


export const PI = Math.PI;

export let usuario = "Keiberth";
export let passwork = "012345";


let passwork2 = "0123456";
/* export default passwork2; */  //Para esportar varibles Default


const hello = () => console.log("Hola");


export default function saludar() {
    console.log("Hola modulos ES6");  
}

export  class Saludar {
    constructor(){
        console.log("HolaClase de ES6");
    }
}
