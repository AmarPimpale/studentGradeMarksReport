import { json } from "stream/consumers"


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
        this.noOfSeatsAddedByCompanyCapacity = 0
        this.customerWhoBookFlight = [
            
        ]

    }

    getFlightDetails(){
        return `Flight Number : ${this.flightNumber} Of ${this.flightCompany} will Depature at ${this.flightTime} from : ${this.fromWhichCity} to ${this.toWhichCity} which having ${this.numberOfSeatsInFlight}  capacity in it`
    }

    addNewCustomerToFlight(customerId,customerName,flightNumber){
        if(this.numberOfSeatsInFlight > this.noOfSeatsAddedByCompanyCapacity){
            //  this.customerWhoBookFlight.({customerId:customerId,customerName:customerName})
            // this.customerWhoBookFlight.push(customerId)
          console.log("1234",customerId,customerName)

            
          this.customerWhoBookFlight.push(JSON.stringify({cusId : customerId,cusName : customerName}))
            
            this.noOfSeatsAddedByCompanyCapacity ++
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
        return `For ${this.flightNumber} ----- ${this.flightCompany} have ${this.noOfSeatsAddedByCompanyCapacity} no Of Booking`
    }
    getCustomerWhoBookedFlight(){
        return `Those are Customer Who Booked Flight here in the ${this.flightNumber} : ${this.customerWhoBookFlight}`
    }
}



const rl = createInterface({
    input: process.stdin,
    output : process.stdout,
    terminal : false
})
let flightNumber,flightCompany,fromWhichCity,toWhichCity,distanceInKm,flightTime,numberOfSeatsInFlight

rl.question("Enter flight no.  :",function(string){
    flightNumber = string
rl.question("Enter flight Company:", function(string){
    flightCompany = string
rl.question("Enter from Which city: ",function(string){
    fromWhichCity = string
rl.question("Enter to which city: ",function(string){
    toWhichCity = string
rl.question("Enter distance In Km. : ", function(string){
    distanceInKm = string
rl.question("Enter flight Time : ",function(string){
    flightTime = string
rl.question("Enter Number Of seats In Flight",function(string){
    numberOfSeatsInFlight =  string
    rl.close()
    let c1= new flight(flightNumber,flightCompany,fromWhichCity,toWhichCity,distanceInKm,flightTime,numberOfSeatsInFlight
        )
        console.log(c1)
        
        function goToMM(){
            console.log("what we want to do : \n *press*  \n 1.getFlightDetails \n 2.addNewCustomerToFlight \n 3.createNewFlightAndTime \n 4.isCustomerAlreadyThereCheck \n 5.getNumberOfCustomerBookingFlightCheck \n \n 6.getCustomerWhoBookFlight")
            const rl1 = createInterface({
                input: process.stdin,
                output : process.stdout
            })
                    rl1.question("Enter Your Choose : ",function(choice){
                        if(choice == 1){
            console.log(c1.getFlightDetails())
            
            goToMM()
                        
                        }else if(choice == 2) {
            rl1.question("Customer Id : ",function(id){
                rl1.question("Customer Name : -",function(name){
                    rl1.question("customer Flight",function(flightNo){
                        console.log(c1.addNewCustomerToFlight(id,name,flightNo))
            goToMM()
                    })
                })
            })
                        }
                        else if(choice == 3){
                            rl1.question("Enter Flight No. : -",function(flightNo){
                                rl1.question("Enter Flight Company : ",function(flightCompany){
                                    rl1.question("Enter Flight Time",function(time){
                                        console.log(c1.createNewFlightAndTime(flightNo,flightCompany,time))
                                        goToMM()
                                    })
                                })
                            })
                        }
                        else if(choice == 4){
                            rl1.question("Enter CustomerId Here : " ,function(id){
                                console.log(c1.isCustomerAlreadyRegistered(id))
                                goToMM()
                                
                            })
                        }
                        else if(choice == 5){
                            console.log(c1.getNumberOfCustomerBookingFlight())
                            goToMM()
                        }
                        else if(choice === 6){
                            console.log(c1.customerWhoBookFlight())
                            goToMM()
                        }
                    })
        }
    goToMM()
    
    // return c1 
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