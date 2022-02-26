// 1.Using object litaral
const student = {
    name: 'Khalid Hasan',
    job: 'Programmer'
}

// 2.Object Constructor
// const person = new Object();
// console.log(person);

//
const human = Object.create(student);
console.log(human.job);

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new People('Kamran', 28);
console.log(person);