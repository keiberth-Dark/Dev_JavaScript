



/* ---------------- Event bubbling  (Con delegacion de los eventos)----------------*/


const d = document,
ParrDiv = d.querySelector(".Parr"),
vacaDiv = d.querySelector(".vaca"),
elefanteDiv = d.querySelector(".elefante"),
zorroDiv = d.querySelector(".zorro");


ParrDiv.addEventListener("click",(e)=>{
  if (e.target.classList.contains("vaca")) {
    console.log("Diste click en vaca"); 
  }
  if (e.target.classList.contains("elefante")) {
    console.log("Diste click en elefante"); 
  }
  if (e.target.classList.contains("zorro")) {
    console.log("Diste click en zorro"); 
  }
});

/* ---------------- Event bubbling  (Un Metodo)----------------*/
