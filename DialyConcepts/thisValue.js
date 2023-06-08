

// // the value fo this is evaluated during run time and depending on in which context is apperas in function class global 

// // in strict mode the value of this is undefined 

// // in not strict mode the value of this is referce or pointed to the global or window object 

// // in arrow function they are special they don't have an their own this

// // in case in such function they are referes to the outer function or parent function only 


// // in case not any outer function they referes the global object or window 
// firstName = "Amar"
// console.log(this)
// let user = {
    
//     // firstName : "Amar",

//     sayHi(){
//         // this.firstName = 'Arjun'
//         console.log(this)
//         let arrow = ()=> console.log(this)
//         arrow()
//         console.log(this)

//     }
// }

// user.sayHi()

// console.log(this)


// function This(){
//     console.log(this)
// }
// This()

// class MyClass{
//     constructor(fn){
//         this.firstName = fn
//     }
//     display(){
//         console.log(this)
//     }
// }

// const newObject = new MyClass("Amar Pimpale Arjun")
// newObject.display()
// console.log(this)


(function() for(let i = 0; i<= 5; i++){
    setTimeout(function log(i){
        console.log(i)
    },1000)
})

