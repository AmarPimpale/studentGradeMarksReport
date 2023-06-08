


// inheritance between construction function in js

function Person(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName

    this.dispalyName = function(){
        
    }
}




Person.prototype.dispalyName = function(){
    console.log(`Name is ${this.firstName}+${this.lastName}`)
}

function Employee(employeeId,salary,firstName,lastName){
    Person.call(this,firstName,lastName)
    // need to set the value of this 
    this.employeeId =employeeId 
    this.salary = salary
}
// set prototype of both as same here

Employee.prototype = Person.prototype

Employee.prototype.getDetails = function(){
    console.log(`${this.employeeId} ${this.firstName}`)
}


const mark = new Employee("any",2000,"Amar","Pimpale")
console.log(mark)

//still we not get the access of the prototype property of the based class object 
mark.dispalyName()
mark 