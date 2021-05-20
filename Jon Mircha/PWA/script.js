

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("./sw.js")
  .then(reg => console.log("Registro de ServiceWorker Exitoso", reg))
  .catch(err => console.warn("Error al tratar de registrar el Sw ", err))
}