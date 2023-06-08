


// banking used case

function BankAcoount(customerName,balance=0){
    // properites data varialbes
    this.customerName = customerName
    this.accountNo = Date.now()
    this.balance = balance
    // methods data functions 

    this.deposit = function(amount){
        this.balance = this.balance + amount
    }
    this.withdraw =amount =>{
        this.balance = this.balance - amount
    }
}

BankAcoount.greet= function(){
    console.log("Thanks for coming Great Day you have")
}

console.log(BankAcoount instanceof Object)
const kumarKarthikey = new BankAcoount("Kumar Karthikey",100000)
console.log(kumarKarthikey)

//we can access the any properties of object
//like .dot operator or square operator 


// console.log(kumarKarthikey.accountNo)

kumarKarthikey.deposit(2000)
console.log(kumarKarthikey)
const johnCane = new BankAcoount("john Smith",3000)
console.log(johnCane)
johnCane.deposit(3000)
johnCane.withdraw(1000)
console.log(johnCane)

// we want not anyone can access the sensetive data from outside

// we make those thing properties private in class

// we interact with user by the those method

// the mechanism we can hide to user by making them abstraction