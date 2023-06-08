



class Customer{
    constructor(userId,name,email,passward,address,phone,age){
        this.UserId = userId
        this.name = name
        this.email = email
        this.passward = passward
        this.address = address 
        this.phone = phone 
        this.age  = age
        this.numberOfFlights = []
        this.numberOfTicketsBookedByUser= []
    }

    customerDetails(){
        return `customer Details \n Name : ${this.name} , `
    }

    addNewCustomer(){
        
    }
}