// inheritance

// child can get properties and method form parent due to inheritance

// it's follows dry concept reuse of code

// we can get access of extends keywords

// we get the access of parent prototype with the help of extends keyword

// constructor linking only properties here

// parentConstructor.call(thiscurrentclass context this pointing to the current class context , with argument need to get those properties)

function BankAcoount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

BankAcoount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAcoount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

function CurrentAccount(customerName, balance = 0) {
  BankAcoount.call(this, customerName, balance);
  this.transactionLimit = 50000;
}

CurrentAccount.prototype.takePersonalLoan = function (amount) {
  console.log("Taking Personal loan:", +amount);
};
CurrentAccount.prototype = Object.create(BankAcoount.prototype);
function SavingAccount(customerName, balance = 0) {
  BankAcoount.call(this, customerName, balance);
  this.transactionLimit = 30000;
}
SavingAccount.prototype = Object.create(BankAcoount.prototype);
SavingAccount.prototype = Object.create(CurrentAccount.prototype)
SavingAccount.prototype.takeBussinessLoan = function (amount) {
  console.log("Taking Bussiness loan", amount);
};

const rakeshKumarHere = new SavingAccount("Rakesh Kumar", 500);
rakeshKumarHere.deposit(500);
rakeshKumarHere.withdraw(500)
rakeshKumarHere.takeBussinessLoan(4000)
rakeshKumarHere.takePersonalLoan(5000)
console.log(rakeshKumarHere);
