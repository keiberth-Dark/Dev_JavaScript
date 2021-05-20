



const d = document,
navegacion = d.querySelector(".h");

// traversin de padre a hijo
console.log(navegacion);
console.log(navegacion.childNodes);//Los espacion en blanco son considerados Elmentos 
console.log(navegacion.children);//elementos reales



// traversin de hijo a padre
console.log(navegacion.parentNode);//Los espacion en blanco son considerados Elmentos 
console.log(navegacion.parentElement.parentElement);//elementos reales



// traversin de hermanos
console.log(navegacion.nextElementSibling);
console.log(navegacion.nextSibling);

const her = d.querySelector(".k:nth-child(1)");

console.log(her);

/* -------------------------DELETE----------------------------- */

const rem = d.querySelector(".kkkk");//Eliminar especifico
const father = d.querySelector(".h").children[2];//Eliminar un hijo desde el father
const fatherr = d.querySelector(".h");//Eliminar un hijo desde el father


rem.remove();//Elimina elementos
father.remove();
fatherr.removeChild(fatherr.children[1]);

/* -------------------------Create----------------------------- */

const enlace = d.createElement("a");

//Agregando texto
enlace.textContent = "Mi burrito";
//Agregando href
enlace.href = "https://developer.mozilla.org/en-US/docs/Web/API/Document";
enlace.target = "_blank"
d.body.insertAdjacentElement("afterbegin",enlace)