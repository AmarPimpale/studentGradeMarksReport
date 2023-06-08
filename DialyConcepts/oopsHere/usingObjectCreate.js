


let person = {
      calAge(){
        return `age of ${this.name} is secret here`
      },

      greet(){
         console.log("Have a great Day")
      }
,
     init(name,lastName,fullName){
        this.name = name
        this.lastName = lastName
        this.fullName = fullName
     }
}


// first parameter of Object create the object based on that we inherit the method form that for newly created object

// 1. first is create blank object

// 2. the method of another object we inherit which in the proto property of that object 

// 3. another agrument used object where we can add properties with values

// {property:{value: "Amar"}}

// we can also add explictly also here



let john = Object.create(person,{name:{value:"Amar"}})
// john.name = "Amar"
console.log(john)
console.log(john.greet())
console.log(john.calAge())


let marry = Object.create(person)

marry.init("Amar","Pimpale","My Name is secret")
console.log(marry)



let student= {
    displayFullName(){
        return `${this.name+this.lastName} is a my name`
    },
    init(lastName){
    this.lastName = lastName
    }
}

let object = Object.create(student)
student.name = "Amar"
console.log(object.displayFullName())
student.init("Pimpale")
console.log(object.displayFullName())

let mark = Object.create(student,{name:{value:"Amar is here"},lastName:{value:"Pimpale"}})
console.log(mark.displayFullName())
