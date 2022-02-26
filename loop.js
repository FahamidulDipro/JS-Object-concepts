const bottle = {
    color: 'White',
    hold: 'Water',
    price: 100,
    isCleaned: true
};

//for in loop
// for (const prop in bottle) {
//     console.log(bottle[prop]);
// }

//Advanced
// const entries = Object.entries(bottle);
// console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}