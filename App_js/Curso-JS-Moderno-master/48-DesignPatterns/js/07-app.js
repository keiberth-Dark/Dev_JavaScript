// Namespaces

const restaurantApp = {};

restaurantApp.platillos = [
  {
    platillo: 'Pizza',
    precio: 25,
  },
  {
    platillo: 'Torta',
    precio: 22,
  },
  {
    platillo: 'Hamburguesa',
    precio: 20,
  },
  {
    platillo: 'Hot Dog',
    precio: 20,
  },
];

restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log(`Bienvenidos a nuesro menú`);

    platillos.forEach((platillo, index) => {
      console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
    });
  },
  ordenar: (id) => {
    console.log(
      `Tu Platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`
    );
  },
  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio,
    };
    restaurantApp.platillos.push(nuevo);
  },
};

restaurantApp.funciones.ordenar(3);
restaurantApp.funciones.agregarPlatillo('Taco', 15);
const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);
