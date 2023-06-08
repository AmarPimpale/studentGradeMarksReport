// polymorphism 

/*
polymorpshim --- plm means the same function with different signatures is callled many times
for example-- a boy at the same can be a studnet, moniter or topper, so the boy can perform different operation at the same time



 */

class Addition {
    add(x,y){
        console.log(x+y)
    }
    add(x,y,z){
        console.log(x+y+z)
    }
    add(x,y,z,a){
        console.log(x+y+z+a)
    }

}

// this is polymorphsim with overloading 

// having --- same class, same method , different signature

// diff sin -- having different functionality based on recevied parameters

const obje = new Addition()
console.log(obje)
obje.add(2,3,4,5)
obje.add(2,3,4)

// object get the functionalily or method which is lasted one 
// overriding 
// class WorlddBank{
//     deposit(greet){
//         console.log(`Wlc to ${greet}`)
//     }
//     deposit(greet){
//         console.log(`wlc to ${greet} with IMF`)
//     }

// }

// class Sbi extends WorlddBank {
//     deposit(greet){
//         super.deposit(greet)
//         console.log(`Wlc to ${greet} "SBI`)
//     }
// }

// let obe = new Sbi()
// obe.deposit("worldBank NY")




// let object =  {}

// object.name = "Amar"

// object.lastName = 'Pimaple'

// let obje = {
// 
// }
// 
// function 