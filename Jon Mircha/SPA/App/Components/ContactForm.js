export function ContactForm(){
  const d = document,
  $form = d.createElement("form"),
  $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $styles.innerHTML = `
  
  .contact-form{
    --form-ok-color: #4caf50;
    --form-error-color: #f44336;
    margin-left: auto;
    margin-right: auto;
    width
    : 80%;
  }

  .contact-form > * {
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
  }

  .contact-form textarea{
    resize: none; /* para Denegar el desplazamiento de la caja de comentarios */
  }

  .contact-form legend,
  .contact-form-response{
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .contact-form input,
  .contact-form textarea{
    font-size: 1rem;
    font-family: sans-serif;
  }

  .contact-form input[type="submit"]{
    width: 50%;
    font-weight: bold;
    cursor: pointer;
    /* place-items: center; */
  }

  .contact-form *::placeholder{
    color: var(--second-color);
  }

  .contact-form [required]:valid{
    border: thin solid var(--form-ok-color);
  }

  .contact-form [required]:invalid{
    border: thin solid var(--form-error-color);
  }

  .contact-form-error{
    margin-top: -1rem;
    font-size: 80%;
    background-color: var(--form-error-color);
    color: #fff;
    transition: all 500ms ease;
  }

  .contact-form-error.is-active{
    display: block;
    animation: show-message 1s normal 0s ease-out both;
  }

  .contact-form-loader{
    text-align: center;
  }

  .none{
    display: none;
  }

  @keyframes show-message{
    0%{
      visibility: hidden;
      opacity: 0;
    }

    100%{
      visibility: visible;
      opacity: 1;
    }
  }
  `;


  $form.innerHTML = `
  <legend>Envianos tus comentarios</legend>
    <!-- Para utilizar ExpReg en HTML se utilisa la propiedad pattern="" -->
    <input type="text" name="name" placeholder="Escribe tu nombre" 
    title="El nombre solo acepta letras y espacios en blanco" 
    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>

    <input type="email" name="email" placeholder="Escribe tu email"
    title="Email Incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>

      <input type="text" name="subject" placeholder="Asunto a tratar" 
      title="El asunto es requerido" required>

      <textarea name="comments" cols="50" rows="5" 
      placeholder="Escribe tus comentarios" data-pattern="^.{1,255}$" 
      title="Tu comentario no debe exceder los 250 caracteres" required></textarea>

    <input type="submit" value="Enviar">

    <div class="contact-form-loader none">
      <img src="./App/Assets/loader.svg" alt="Cargando">
    </div>
    <div class="contact-form-response none">
      <p>los datos han sido enviados</p>
    </div>
  `;

  function validationForm(){
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");
  
        //console.log($inputs);
  
        $inputs.forEach((input) =>{
          const $span = d.createElement("span");
          $span.id = input.name;
          $span.textContent = input.title;
  
          $span.classList.add("contact-form-error","none");
          input.insertAdjacentElement("afterend",$span);
        });
  
        d.addEventListener("keyup", (e) => {
          if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
              pattern = $input.pattern|| $input.dataset.pattern; //los text area no tienen atributo patron
              //console.log($input, pattern);
  
            if(pattern && $input.value !==""){
              //console.log("El input tiene patro");
              let regex = new RegExp(pattern);
              return !regex.exec($input.value)
              ?d.getElementById($input.name).classList.add("is-active")
              :d.getElementById($input.name).classList.remove("is-active")
            }
  
            if (!pattern) {
              //console.log("El input No tiene patro");     
              return $input.value === ""
              ?d.getElementById($input.name).classList.add("is-active")
              :d.getElementById($input.name).classList.remove("is-active")       
            }
          }
        });
  
    d.addEventListener("submit", (e) =>{
      e.preventDefault();
      alert("Enviando Formulario");
  
      const $loader = d.querySelector(".contact-form-loader"),
        $responsive = d .querySelector(".contact-form-response")
  
        $loader.classList.remove("none");

        fetch("https://formsubmit.co/ajax/keiberth456@gmail.com",{
          method: "POST",
          body: new FormData(e.target)
        })
        .then(res => res.ok ? res.json(): Promise.reject(res))
        .then(json => {
          console.log(json);
          $loader.classList.add("none");
          $responsive.classList.remove("none");
          $responsive.innerHTML = `<p>${json.message}</p>`
          $form.reset();
        })
        .catch(err => {
          console.log(err);
          let message = err.statusText || "Ocurrio un error al enviar";
          $responsive.innerHTML = `<p>Error ${err.status}: ${message}</p>`
        })
        .finally(()=> setTimeout(() => {
          $responsive.classList.add("none");
          $responsive.innerHTML = "";
        }, 3000))
  
        /* setTimeout(() => {
        
        setTimeout(() => $responsive.classList.add("none") , 3000);
          
        }, 3000); */
    });
  }

  setTimeout(() => {
    validationForm();
  }, 100);


  return $form;
}