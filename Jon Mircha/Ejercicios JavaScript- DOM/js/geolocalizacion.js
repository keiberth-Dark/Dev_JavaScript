

  const d = document, //Estructura HTML
    w = window,
    n = navigator; //Caracteristicas del dispositivos y dispositivo de harware

  export default function GetGeolocation(id){
    const $id = d.getElementById(id),
      options = { //Buscar mas opciones en la documentacion
        enableHighAccuracy:true,
        timeout: 5000,
        maximumAge: 0
      };

      const success = (position) =>{
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = `<p>Tu posicion Actual es :</p>
        <ul>
          <li>latitud: <b>${coords.latitude}</b> </li>
          <li>longiud: <b>${coords.longitude}</b></li>
          <li>precision: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank"
        rel="noopener">Maps</a>
        `;
        
      }

      const error = (err) =>{
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);
      }



      n.geolocation.getCurrentPosition(success,error,options);
}