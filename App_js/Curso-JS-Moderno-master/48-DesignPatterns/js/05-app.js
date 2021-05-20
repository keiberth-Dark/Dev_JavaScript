// Module Pattern

// Manera antigua de manejar diferentes archivos en un mismo proyecto
const modulo1 = (function () {
  const nombre = 'Marco';

  function hola() {
    console.log('Hola');
  }

  return {
    nombre,
    hola,
  };
})();

// Ahora se usan export e import
