







import *as flight from '../ars/flight.js'
import { createInterface } from 'readline'
import { json } from 'stream/consumers'
class flightReservation extends flight.flight{
    constructor(cus){
        super()
        this.customer = cus
        this.newFlightNumber 
        this.newFlightCompany 
        // this.newFlightBookingWithDetails = []
        this.bookingForNewFlight = []
    }

    bookFlight(customerName,customerId,flightNum,flightComapany){
        console.log(this.getFlightDetails())
        if(flightComapany == this.flightCompany && flightNum == this.flightNumber ){
            this.noOfSeatsAddedByCompanyCapacity ++
            this.customerWhoBookFlight.push(JSON.stringify({cusId : customerId,cusName: customerName}))
            return `Your Flight ${this.flightCompany} - ${this.flightNumber} For customer ${customerName} has an id of a ${customerId} Has been Booked Now`
        }
        else{
            `Hey ${customerName  } - ${customerId} , sorry for inconivnence there is not any flight ${flightNum} of ${flightComapany}`
        }
        
    }
    cancelFlight(customerId,customerName,flightNum,flightCompany,reason){
        this.customerWhoBookFlight.forEach((user)=>{
            const parsedUser = JSON.parse(user)
            if(parsedUser.cusId === customerId){
                this.noOfSeatsAddedByCompanyCapacity--
                const removeId =this.customerWhoBookFlight.findIndex((user)=>{
                    user.cusId ==customerId 
                })
                this.customerWhoBookFlight.splice(removeId,1)
                return `we consider your problem of ${reason} Mr/Mrs ${customerName} we are cancalled your with repay of payment for the ${flightNum,flightCompany}`

            }
        })
        
    }
    addNumberOfTicketsToExistingBookedFlight(customerId,customerName,numberOfTickets){
         this.noOfSeatsAddedByCompanyCapacity += numberOfTickets
         return `customerName : ${customerName , customerId} Added a more tickets ${numberOfTickets}`

    }
    addNumberOfTicketsForNewFlight(customerName,customerId,noofTicketsForNewFlight,flightNumber,flightComapany){
        this.bookingForNewFlight.push(JSON.stringify({cusId:customerId,custName:customerName,noTickets:noofTicketsForNewFlight,fN:flightNumber,fc:flightComapany}))
        return `Booking For New flight ${flightNumber,flightComapany} for customer${customerName,customerId} with no of tk ----- ${noofTicketsForNewFlight} has been booked now thank for booking this flight here`
    }
   

}




const rl3 = createInterface({
    input: process.stdin,
    output : process.stdout,
    // terminal : false

})

rl3.question("Enter customer Id : ",function(string){
    const reservationForCustomer = new flightReservation(string)
    console.log(reservationForCustomer)

    function goToMM(){
        console.log("What you want to do : choose : ")
    console.log('press \n 1.Book tic \n 2.cancel Booking of Flight \n 3.addNoOfTicketExistingFlight \n 4.addNoOfTicket for New Flight')

    rl3.question("Enter Choice : ",function(choice){
        if(choice ==11){
            rl3.question("Enter Customer Name : ",function(name){
                rl3.question("Enter cust Id : ",function(id){
                    rl3.question("Enter flight Number : ",function(flightN){
                        rl3.question("Enter flight Company : ",function(company){
            console.log(reservationForCustomer.bookFlight(name,id,flightN,company))
            goToMM()

                        })
                    })
                })
            })
        }
        else if(choice ==22){
            rl3.question("Enter Customer Name : ",function(name){
                rl3.question("Enter cust Id : ",function(id){
                    rl3.question("Enter flight Number : ",function(flightN){
                        rl3.question("Enter flight Company : ",function(company){
            rl3.question("Enter Reasone : ",function(reason){
                console.log(reservationForCustomer.cancelFlight(name,id,flightN,company,reason))
                goToMM()
            })

                        })
                    })
                })
            })
        }
        else if(choice == 33){
            rl3.question("Enter Customer Name : ",function(name){
                rl3.question("Enter cust Id : ",function(id){
                    rl3.question("Enter No of tic : ",function(tic){
                       console.log(reservationForCustomer.addNumberOfTicketsToExistingBookedFlight(name,id,tic))
                       goToMM()
                    })
                })
            })
        }
        else if(choice == 44){
            rl3.question("Enter Customer Name : ",function(name){
                rl3.question("Enter cust Id : ",function(id){
                    rl3.question("Enter No of tic : ",function(tic){
                       rl3.question("Enter flightNumber : ",function(flightN){
                        rl3.question("Enter flight compnay:",function(company){
                            console.log(reservationForCustomer.addNumberOfTicketsForNewFlight(name,id,tic,flightN,company))

                            rl3.close()
                            goToMM()
                        })
                       })
                    })
                })
            })
        }
    })
    }
    goToMM()
})
