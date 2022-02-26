const bottle = {
    color: 'White',
    hold: 'Water',
    price: 100,
    isCleaned: true
};

//Getting All Proparties names
const keys = Object.keys(bottle);
//Getting All values 
const values = Object.values(bottle);
//Getting Key and Value pairs
const entities = Object.entries(bottle);
console.log(keys);
console.log(values);
console.log(entities);