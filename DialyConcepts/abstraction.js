
/*
Abstraction 

Ab is way of hiding the implemenation deatails and showing only the functionality to the users*/


// class Employee {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//         let montlyBonus = 10000;
//         let incentives = 20000;

//         let totalSalary = function () {
//             let finalSalary = salary + montlyBonus + incentives;
//             console.log("Final Salary : ", finalSalary);
//         };

//         this.getDetails = function () {
//             console.log(`Employee Name:${this.name} | age : ${this.age} `);
//             totalSalary();
//         };
//     }
// }

// let emp1 = new Employee("Amar",25,100000)
// emp1.getDetails()
// emp1.montlyBonus = 20000
// emp1.getDetails()
// emp1.age = 26
// emp1.getDetails()
// emp1.montlyBonus = 30000
// console.log(emp1.getDetails)
// emp1.age = 34
// emp1.getDetails()
// emp1.montlyBonus = 30000
// emp1.incentives = 4000
// emp1.totalSalary()
// emp1.totalSalary()



//abstraction 

function person(firstNameOne,lastNameOne){
    let firstName = firstNameOne
    let lastName = lastNameOne

     let getDetails_noaccess = function(){
        return (`firstName is : ${firstName} lastName is : ${lastName}`)
    }

    this.getDetails_access = function( ){ 
        return `firstName is : ${firstName} lastName is : ${lastName}`
    }
    getDetails_noaccess()
}

let person1 = new person("Amar", "Pimpale")
console.log(person1.getDetails_access())
console.log(person1.getDetails_noaccess)
console.log(person1.firstNameOne)
