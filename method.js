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
            return this.money;
        }

    }
    // 
student.takeExam();
const remainingBalance = student.treatDey(100);
console.log(remainingBalance);