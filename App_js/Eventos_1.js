





const d = document,
      w = window;
console.log(1);

d.addEventListener("DOMContentLoaded", ()=>{ //Se ejecuta cuando todo el documento este cargado
console.log(2);
});
console.log(3);

/* ---------------------- */

const nav = d.querySelector(".Parr");

nav.addEventListener("click",()=>{
  //console.log("Diste click en parrafo")
})

nav.addEventListener("mouseenter",()=>{
  //console.log("Entrando");
  nav.style.backgroundColor = "black";

})

nav.addEventListener("mouseout",()=>{
  //console.log("Saliendo");
  nav.style.backgroundColor = "white";
})



d.addEventListener("keypress",(e)=>{
  console.log(e);
})

const formulario = d.querySelector("#formulario")
formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log(e);
  console.log(e.target.action);

})

//document.addEventListener("mouseover")

w.addEventListener("scroll",()=>{
  const scrollPX = window.scrollY;
  //console.log("scrolling");
  console.log(scrollPX);

  const premiun = d.querySelector(".th"),
        ubicacion = premiun.getBoundingClientRect();
  
        if (ubicacion.top < 650) {
          console.log("El elemento ya esta visible")
        }else{
          console.log("Aun no, esta visible")
        }

});

/* ---------------- Event bubbling (Con stopPropagation()  )----------------*/

const ParrDiv = d.querySelector(".Parr");
const vacaDiv = d.querySelector(".vaca");
const elefanteDiv = d.querySelector(".elefante");
const zorroDiv = d.querySelector(".zorro");



/* vaca, elefante, zorro */

ParrDiv.addEventListener("click", (e)=>{
  console.log("Click en parr")
});
vacaDiv.addEventListener("click", (e)=>{
  e.stopPropagation();

  console.log("Click en vaca")
});
elefanteDiv.addEventListener("click", (e)=>{
  e.stopPropagation();

  console.log("Click en elefante")
});
zorroDiv.addEventListener("click", (e)=>{
  e.stopPropagation();

  console.log("Click en zorro")
});


