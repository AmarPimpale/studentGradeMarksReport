

class BankAcoount{
    constructor(customerName,balance=0){
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}

class CurrentAccount extends BankAcoount{
    constructor(customerName,balance=0){
        super(customerName,balance)
        this.transacationLimit = 3000
    }

    takingPersonlLoan(amount){
        console.log("Taking Personal Loan",amount)
    }


}

class SavingAccount extends CurrentAccount{
    constructor(customerName,balance=0){
        super(customerName,balance)
        this.transactionLimit = 4000
    }

    takingBussinessLoan(amount){
        console.log("Taking Business Loan",amount)
    }
}


// const rakeshKumarHere = new SavingAccount("rakesh Kumar",1000)
// console.log(rakeshKumarHere)

const johnCane = new SavingAccount("john kennday",2000)
const johnCanesmith = new SavingAccount("john kennday",2000)
johnCane.deposit(100)
console.log(johnCane)
johnCane.withdraw(200)
console.log(johnCane)





