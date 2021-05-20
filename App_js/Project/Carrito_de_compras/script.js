


//Variables

const d = document,
    carrito = d.querySelector("#carrito"),
    listaCurso = d.querySelector("#lista-cursos"),
    contenedorCarrito = d.querySelector("#lista-carrito tbody"),
    vaciarCarrito = d.querySelector("#vaciar-carrito");




  //Cuando agregas un curso presionando "Agregar carrito"
  listaCurso.addEventListener("click",(e) =>{
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
      console.log("agregandon al carrito...");
      

  }
})
    