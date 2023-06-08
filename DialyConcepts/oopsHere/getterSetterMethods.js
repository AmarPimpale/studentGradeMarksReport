

// data properites 
// Accesser properites

// Acceser properites are the method for get or sets the value of the object property



// using get Keyword


// why we called it as property because we access them as properties not using braces there 




const peroson = {
    name : "Amar",
    lastName : "Pimpale",

    get fullName(){
        return  "Mr" + this.name+this.lastName
    },

    set setName(name){
        this.name = name
    }
    
}


console.log(peroson.fullName)
peroson.setName = "Amar  "
console.log(peroson.fullName)


class Person{
    constructor(name,lastName){
        this.name = name
        this.lastName = lastName

       

      
    }
    dispalyName=function(){
        console.log(this.name+this.lastName)
    }
    static display(){
        console.log("My Name")
    }

}

const person1 = new Person("Amar", "Pimpale")

person1.dispalyName()
Person.display()


// setter need argument to set the object properties
// set not pass the value as argument pass as value to assgin them there not as argument or call the them assign them as the properties value 

// we not give value as argument becaseu those are not methods we not called we assign new value as assigning other value to the variables normally we used there 

// in case we want to achive the encapuslation so we want some properties make not access from outside so we make the private but incase we need those properties then we have some method from that incase we need we can access them 

// set calculated value for a property


// not only value but same changes we want then we use setter method 






