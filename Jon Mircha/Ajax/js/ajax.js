




/*     Curso JavaScript: 106. AJAX: Objeto XMLHttpRequest - #jonmircha   */

(() => {
  /* Instancia  */
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  /* Asignacion del elemento */
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    //console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Exito");
      //console.log(xhr.responseText);
      //$xhr.innerHTML = xhr.responseText;

      let Json = JSON.parse(xhr.responseText);

      //console.log(Json)

      Json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} // ${el.email} // ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("Error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
    //console.log("Este mensaje cargara de cualquier forma");
  });

  /* Abrir la peticion y establecer el metodo */
  //xhr.open("GET","https://jsonplaceholder.typicode.com/users"); //Externa
  xhr.open("GET", "assets/users.json"); //Local

  /* Enviar la peticion */
  xhr.send();
})();

/*     Curso JavaScript: 107. AJAX: API Fetch - #jonmircha  */

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users") //para llamarla local assets/users.json
    .then((res) => {
      //console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      //console.log(json)
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un Error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
  /* .finally(() =>  //Opcional
      console.log(
        "Esto se ejecutara independientemente del resultado de la Promesa Fetch"
      );
    ); */
})();

/*     Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha   */

(() => {
  const $fetchAsync = document.getElementById("fetch-Async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"), //para llamarla local assets/users.json
        json = await res.json();
      //console.log(res, json);

      //if (!res.ok) throw new Error("Ocurrio un error al solicitar los datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrio un Error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      //console.log("finally");
    }
  }

  getData();
})();
/*     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha    */

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrio un Error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutara independientemente del resultado de axios");
    });
})();

/*     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha  */

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"), //para llamarla local assets/users.json
        json = await res.data;
      //console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);

    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrio un Error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;

    } finally {
      //console.log("Esto se ejecutara independientemente del Try..catch");
    }
  }

  getData();
})();


