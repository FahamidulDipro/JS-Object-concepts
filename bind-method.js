const student = {
    id: 101,
    name: 'Dipro',
    major: 'Mathematics',
    money: 20000,
    subjects: ['English', 'Calculus', 'Vector Geometry', 'ODE', 'PDE', 'Fundamentals of Maths'],
    bff: {
        name: 'Kamran',
        age: 28
    },
    takeExam: function() {
        console.log(this.name, 'Taking Exam');
    },
    treatDey: function(expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }

}

const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 60000,

}
student.treatDey(100);
const heroTreatDey = student.treatDey.bind(heroBalam);
heroTreatDey(100);