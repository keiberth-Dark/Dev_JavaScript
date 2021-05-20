import hamburgerMenu from"../js/Menu_Hamburguesa.js";
import {digitalClock,alarm} from"../js/reloj.js";
import {moveBall,shortcuts} from "../js/Teclado.js";
import countdown from "./Cuenta_Regresiva.js";
import scrollTopBottom from "./boton_scroll.js";
import DarkTheme from "./Theme-dark.js";
import responsivemedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_Red.js";
import webCam from "./deteccion_webcam.js";
import GetGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formularios.js";
import speechReader from "./narrador.js";




  const d = document;

    d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","may 31,2021 15:43:1","Feliz Cumpleaños Keiberth");
    scrollTopBottom(".scroll-top-btn");
    responsivemedia(
      "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91">Ver video</a>
    `,
    `<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/6IwUl-4pAzc" 
    frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>`);

    responsivemedia(
      "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/1pRmUq8HbgAc38xL7">Ver Mapa</a>
    `,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8134304.916850051!2d-69.50133677661455!3d5.442982325521454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcc18ec3137447f%3A0xe8854354ec30a685!2sR%C3%ADo%20Orinoco!5e0!3m2!1ses!2sve!4v1605813766712!5m2!1ses!2sve" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    GetGeolocation("geolocation");
    searchFilter(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
    
  });


  d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e,".ball",".stage");
  });


  DarkTheme(".dark-theme-btn","dark-mode");
  networkStatus();
  speechReader();
  
//console.log(DarkTheme)
