
// object create

// 1. object literal


let Amar
 = {
    name : "Amar",
    lastName : "Pimpale",

     displayReport : function(){

     }
}
// console.log(objct)
// objct.age = 34
// console.log(objct)
// conso


// function constructor

function Person(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName

this.displayDetails = function(){
        console.log(this.firstName + this.lastName)
    }
}

const niitikesh = new Person("Nitikesh","patil")
const admin = new Person("admin","patil")
console.log(niitikesh)
console.log(admin)

