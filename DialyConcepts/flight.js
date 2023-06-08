// import { json } from "stream/consumers"


import { createInterface } from 'readline'


export class flight {
    constructor(flightNumber,flightCompany,fromWhichCity,toWhichCity,distanceInKm,flightTime,numberOfSeatsInFlight){
        this.flightNumber = flightNumber
        this.flightCompany = flightCompany
        this.fromWhichCity = fromWhichCity
        this.toWhichCity = toWhichCity
        this.distanceInKm = distanceInKm
        this.flightTime = flightTime
        this.numberOfSeatsInFlight = numberOfSeatsInFlight
        this.noOfSeatsAddedByCustomerByBooking = 0
        this.customerWhoBookFlight = [
            
        ]

    }

    getFlightDetails(){
        return `Flight Number : ${this.flightNumber} Of ${this.flightCompany} will Depature at ${this.flightTime} from : ${this.fromWhichCity} to ${this.toWhichCity} which having ${this.numberOfSeatsInFlight}  capacity in it`
    }

    addNewCustomerToFlight(customerId,customerName,flightNumber){
        if(this.numberOfSeatsInFlight > this.noOfSeatsAddedByCustomerByBooking){
            //  this.customerWhoBookFlight.({customerId:customerId,customerName:customerName})
            // this.customerWhoBookFlight.push(customerId)
          console.log("1234",customerId,customerName)

            this.customerWhoBookFlight.push(JSON.stringify({cusId : customerId,cusName : customerName}))
            
            this.noOfSeatsAddedByCustomerByBooking ++
            return `flight Booking By ${customerName} Id: ${customerId} for flight Number${flightNumber}  `
        }
    }

    createNewFlightAndTime(flightNumber,flightCompany,flightTime){
        this.flightNumber = flightNumber
        this.flightCompany = flightCompany
        this.flightTime = flightTime

        return `New flight Added for Same Route from ${this.fromWhichCity} to ${this.toWhichCity} Having flightNumber ${this.flightNumber} of ${this.flightCompany} at on the time of ${this.flightTime}`
    }

    isCustomerAlreadyRegistered(customerId){
    
            // this.customerWhoBookFlight.map((user, index= 0)=>{
            //     console.log( "555index", customerId,user , index , )
            
            //     if(user[index].cusId == customerId){
            //         return `This customer who has Id : ${customerId} which is already Present`
            //     }
            //     else{
            //         return `This costomer who has Id : ${customerId} which is not in flight`
            //     }
            // })

            let isRegistered = false;
            this.customerWhoBookFlight.forEach(user => {
                const parsedUser = JSON.parse(user);
                if(parsedUser.cusId === customerId){
                    isRegistered = true;
                }
            });
            return isRegistered ? `This customer who has Id : ${customerId} which is already Present` : `This costomer who has Id : ${customerId} which is not in flight`;
        
    }

    getNumberOfCustomerBookingFlight(){
        return `For ${this.flightNumber} ----- ${this.flightCompany} have ${this.noOfSeatsAddedByCustomerByBooking} no Of Booking`
    }
    getCustomerWhoBookedFlight(){
        return `Those are Customer Who Booked Flight here in the ${this.flightNumber} : ${this.customerWhoBookFlight}`
    }
}



const rl = createInterface({
    input: process.stdin,
    output : process.stdout
})
let flightNumber,flightCompany,fromWhichCity,toWhichCity,distanceInKm,flightTime,numberOfSeatsInFlight

rl.question("Enter UserId  :",function(string){
    flightNumber = string
rl.question("Enter Email:", function(string){
    flightCompany = string
rl.question("Enter name: ",function(string){
    fromWhichCity = string
rl.question("Enter adress: ",function(string){
    toWhichCity = string
rl.question("Enter PhoneNo. : ", function(string){
    distanceInKm = string
rl.question("Enter Age : ",function(string){
    flightTime = string
rl.question("Enter Passwaord",function(string){
    numberOfSeatsInFlight =  string
    rl.close()
    let c1= new customer.Customer(flightNumber,flightCompany,fromWhichCity,toWhichCity,distanceInKm,flightTime,numberOfSeatsInFlight
        )
        console.log(c1)
    return c1
})
})

})  
})
})
   
}) 

})


// const flightShedularHere = new flight("Air-377","Boeing","Aukrua","Budhpest","20000","11 Am",500)
// console.log(flightShedularHere)
// console.log(flightShedularHere.addNewCustomerToFlight(11,"kumar Kartieky","Air-377"))
// console.log(flightShedularHere.addNewCustomerToFlight(2222,"kumar karan","Air-377"))
// console.log(flightShedularHere.addNewCustomerToFlight(2,"kumar arjun","Air-377"))
// console.log(flightShedularHere.getFlightDetails())
// console.log(flightShedularHere.getNumberOfCustomerBookingFlight())
// console.log(flightShedularHere.getCustomerWhoBookedFlight())
// console.log(flightShedularHere.isCustomerAlreadyRegistered(11))