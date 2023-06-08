

// another way to create objects

// classes

// classes are the synthetic sugar 

// it converted into constructor function

// we not need to add the method on prototypes in classes because it internally added into those prototype of class to saving the memeory space it get for storing the those methods

class BankAcoount{
    constructor(customerName,balance=0){
        // how to receive parameters in the class ES6
        // data variables
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.balance = balance}

        deposit(amount){
            this.balance += amount
        }

        withdraw(amount){
            this.balance = this.balance - amount
        }
}

const johnCane = new BankAcoount("john cane",2000)
console.log(johnCane)
johnCane.deposit(1000)
johnCane.withdraw(3000)
console.log(johnCane)
const johnDoe  = new BankAcoount("john Doe")
console.log(johnDoe)
johnDoe.deposit(3000)
johnDoe.withdraw(1400)
console.log(johnDoe)
// with normal function we can do hositing 

// but with the classes no hoisting working here there


// function declaration expression

// similar like class declaration and expresssion 