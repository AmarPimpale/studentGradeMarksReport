

class BankAccount{
    
    customerName 
    accountNumber 
    #balance = 0

    constructor(customerName,balance=0){
        this.customerName = customerName,
        this.accountNumber = Date.now()
        this.#balance = balance
    }
    desposit(amount){
        this.#balance += amount
    }

    withDraw(amount){
        this.#balance -= amount
    }

    setBalance(amount){
        if(isNaN(amount)){
           throw new Error("Amount is not a valid input");
        }
        this.#balance  = amount
    }

    getBalance(){
        return this.#balance
    }

}

class CurrentAccount extends BankAccount{
    transactionLimit = 5000
    
    constructor(customerName,balance=0){
        super(customerName,balance)
    }
    // hide method with the by making private here

    // make use of # private prefix and then call in another method
    // anotherMethod(){

    // privateMethod }

    #calcaluteInterest(amount){
        console.log("calculating Interest")
    }
    takingPersonalL = function(amount){
        this.#calcaluteInterest(amount)
        console.log("taking Personal L",amount)
    }
}

const rakeshKumarHere = new CurrentAccount("Rakesh Kumar here",2000)

// encapsualtion is one of the oops concepts where we grounping bunching or bundle the data variables nothing but properties and method nothing but data functions inside single containers

// in simple work we making them private so any one can not change from outside the class here

// by using private keyword _ it's common thing but for only convetion 
// # now new introduced into js


console.log(rakeshKumarHere)
// rakeshKumarHere.#balance = 3000
// no better approach 

rakeshKumarHere.setBalance(4000)
console.log(rakeshKumarHere)
rakeshKumarHere.takingPersonalL(5000)

// for set change value

// for get the value 

//getter method 

console.log(rakeshKumarHere.getBalance())
// console.log(rakeshKumarHere.#balance)

console.log(BankAccount.__proto__ == Function.prototype)
console.log(BankAccount.__proto__==CurrentAccount.prototype)


// no invalid input

// do want to public 

// using setMethod to access internal private properties