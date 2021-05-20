// Fizz buzz - 100 Números

// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzz
// 15 30 45   ... FIZZBUZZ!


for (let i = 1; i <= 100; i++) {

    // if (i === 0) {
    //     console.log(i);
    //     continue;
    // }

    // if (i % 15 === 0) {
    //     console.log(`${i} FIZZBUZZ!`);
    //     continue;
    // }

    // if (i % 5 === 0) {
    //     console.log(`${i} BUZZ`);
    //     continue;
    // }

    // if (i % 3 === 0) {
    //     console.log(`${i} FIZZ`);
    // }

    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ!`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    }
}
