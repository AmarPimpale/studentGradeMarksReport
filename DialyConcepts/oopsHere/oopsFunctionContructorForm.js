function BankAcoount(customerName,balance=0){

    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance
    this.deposit = (amount)=>{
        this.balance += amount
    }
    this.withDraw = (amount)=>{
        this.balance -= amount
    }
}
let accounts = []
const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#CustomerName")
const balance = document.querySelector("#balance")

const DepositForm = document.querySelector("#DepositForm")
const accountNumber = document.querySelector("#accountNumber")
const Amount = document.querySelector("#Amount")

accountForm.addEventListener('submit',(e) => {
        e.preventDefault()
        const account = new BankAcoount(customerName.value,+balance.value)
        accounts.push(account)
        console.log(customerName.value, balance.value)
        console.log(accounts)
    })

DepositForm.addEventListener("submit",(e)=>{
    e.preventDefault()
   const account=  accounts.find((account)=>account.accountNumber=== +accountNumber.value)
   console.log(account)
   account.deposit(+Amount.value)
   console.log(accounts)
})