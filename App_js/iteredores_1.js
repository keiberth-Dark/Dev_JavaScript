/* For */

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El numero ${i}`);
  }
}

for (let i = 0; i < 20; i += 2) {
  console.log(`El numero ${i} es par`);
}
console.clear();

/* breack y continuos */
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log(`este es el ${i}`);
    break;
  } else {
    console.log(`el numero ${i}`);
  }
}
console.clear();

//Fiszz buzz

//3 6 9 12 - Fizz
//5 10 15 20 - buzz
//15 30 45 -FizzBuzz

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} Fizz Buzz!!`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } 
    
}
console.clear();


/* while */

let i = 0;

while (i < 10) {
  console.log(`Hola ${i}`)
  i++;
}
console.clear();

/* a diferencia del while el Do While se ejecutara solo una ves */

/* do while */
let j = 0;


do  {
  console.log(`hello ${j}`)
  j++;
} while(j < 10);
