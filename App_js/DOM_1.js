


let element,
  d = document;

element = d;
element = d.all;
element = d.head;
element = d.body;
element = d.domain;
element = d.forms;
element = d.links[0].classList;
element = d.links[0].className;
element = d.links[0].id;
element = d.links[0].href;

console.log(element);


// Selecciona todas las (clases)  -----------    getElementsByClassName  
const header = d.getElementsByClassName("sf");//si no exitos retorna htmlCollection


// Selecciona todas las (id)  -----------      getElementById
const id = d.getElementById("ComoEstas");//si no exitos retorna null
console.log(id);



/* Selecionar elementos a nivel de CSS */

// Selecciona todas las ()  -----------      querySelector
const id_ = d.querySelector(".htm");//solo selecciona uno
const id1 = d.querySelector(".h .k:nth-child(3)"); //seleciona especifica que tienen la misma classe
const id2 = d.querySelector(".h .kkkk");      //seleciona una especifica dentro del resto 
const id4 = d.querySelector("#Como_Estas");//selecciona un id
const id3 = d.querySelectorAll(".Hola");//selecciona a todos los disponible


console.log(id_);
console.log(id1);
console.log(id2);
console.log(id3);
console.log(id4);

console.log(id_.innerText = "Hola Soy Damiel");//CSS visibiliti: Hidden ---- No lo va a encontrar
console.log(id_.textContent = "Hola Soy samael");// este si lo va a encontrar
console.log(id_.innerHTML = "Hola Soy Kraulin");//Se trae el html



/* ---------------------------------------  Cambiando CSS */

const k = d.querySelector(".htm");

k.style.background = "red";
k.style.fontFamily = "Arial";

k.classList.remove("htm")
k.classList.add("htm")


console.log(k)