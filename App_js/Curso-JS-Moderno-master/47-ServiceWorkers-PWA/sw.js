const nombreCache = 'apv-v3';
const archivos = [
  './',
  './index.html',
  './error.html',
  './css/bootstrap.css',
  './css/styles.css',
  './js/app.js',
  './js/apv.js',
];

// Cuando se instala el service Worker
self.addEventListener('install', (e) => {
  console.log('Instalado el Service Worker');

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log('cacheando');
      cache.addAll(archivos);
    })
  );
});

// Activar el Service Worker
self.addEventListener('activate', (e) => {
  console.log('Service Worker Activado');

  e.waitUntil(
    caches.keys().then((keys) => {
      // console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key)) //Borra los que son diferentes al nombreCache
      );
    })
  );
});

// Evento fetch para descargar archivo estatico
self.addEventListener('fetch', (e) => {
  console.log('Fetch', e);

  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) =>
        cacheResponse ? cacheResponse : caches.match('error.html')
      )
  );
});
