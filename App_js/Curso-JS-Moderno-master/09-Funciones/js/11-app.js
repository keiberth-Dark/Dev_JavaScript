const aprendiendo = function (tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
};

aprendiendo('Java');


// Si se trata de un solo parametro podemos omitir los ()
// const aprendiendo3 = (tecnologia) => `Aprendiendo ${tecnologia}`;
const aprendiendo3 = tecnologia => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo3('PHP'));

const aprendiendo4 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo4('JavaScript','Node.js'));