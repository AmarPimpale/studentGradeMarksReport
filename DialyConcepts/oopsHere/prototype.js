


function BankAcoount(customerName,balance=0){
    // properites data varialbes
    this.customerName = customerName
    this.accountNo = Date.now()
    this.balance = balance
    // methods data functions 

    // this.deposit = function(amount){
    //     this.balance = this.balance + amount
    // }
    this.withdraw =amount =>{
        this.balance = this.balance - amount
    }
}


const rakeshKumarHere= new BankAcoount("Rakesh Kumar Here",1000)

console.log(rakeshKumarHere)

const johnDoe = new BankAcoount("Joe Doe",2000)
console.log(johnDoe)

// every object get method when we creating new object instace using constructor function 
// rather than writing in the construtor function we write in the prototype
// prototype in action to limit those things
// functions are also object in js


// every time creating function there is one properties prototype which in nothing but blank object 
console.log(BankAcoount.prototype)

// 1.

BankAcoount.prototype.testHere = "This Is Test"


// 2 desposit method add in prototype

BankAcoount.prototype.deposit = function(amount){
    this.balance = this.balance + amount
}


// 3.
BankAcoount.prototype.withdraw = function(amount){
    this.balance = this.balance -1
}

// we not using arrow function

// there is not any own context or own this it takes the value of this immediate parenet function here is window object 
// when we add any method on the prototype of the object we access proto type chain 
// rakeshKumarHere.deposit(3000)
// console.log(rakeshKumarHere)


// prototype chain

// when deposit method or any method we call on the object first it will seen inside the object 
// then see in the constructor's prototype


// on every time when we creating object there is not method which attached with the new instance of the object 

// when we addes on the prototype

// this method share among all created object 

// but in case it not find any method in prototype then it wiil be check inside the object prototype inside it
// this is root object 

// bankAcoount constructor

// then in prototype of bankAccount prototype

// object prototype root object of all objects

// then check in bank account constructor also objects

// every time we created object all object can have objects can have method we it need only availabel




