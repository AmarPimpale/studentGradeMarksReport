


function yell(){
    return 1
}
console.log(yell())


const funHere = new Function('num',"return num")

console.log(funHere(4))


// behind the scene


funHere.yelloo = "hello"

// behind the scene what happend it's object?

// js create a special type of object this is callable object


// specialObject = {
//     yelloo : 'Hello',
//     name : "funHere",
//     (): console.log("4")
// }

// function are also objects this is special type of object which is callable object


// --------------functions are the first class citizes in  js

// 1. -------- functions can assign to variable or assign as properties 
// 2. -------- we can pass function as arguments into a function
// 3. ---------we can return function as value  


// 1. 
const funHeres = function(){
    console.log("Hello")
}


// 2.

function a(b){
    b()
}
a(function(){console.log("hi here")})


// 3.

function sum(){
    return function add(){console.log("hey haaaa")}
}
// either we dobule call
// or stored into variable and call it 

// sum()()

var hey = sum()
hey()



// functions initalization and declaration
// 
function wow(){
    console.log("wow beautiful")
}
for(let i=0;i<5;i++){
    // function wow(){
    //     console.log("wow beatiful")
    // }
    wow()
}

// when every time loop iterated the function going to initialize every time so instead of making use of declared inside loop we initiliaze declared outside the loop 


// -------------first check in variable environment and the scope chain here

function addition(param){
    return param
}
console.log(addition())
// when we write like these param becomes it's add into variable declaration
