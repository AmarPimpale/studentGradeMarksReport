

// airline mangement system


// parent for creating account and login into account





let name = ''

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, start => {
    console.log(`Hi ${start}!`);
    readline.close();
  });
  readline.question(`What's your name?`, names => {
    // console.log(`Hi ${name}!`);
    name = names
    readline.close();
  });

  readline.question(`What's your name?`, pp => {
    // console.log(`Hi ${name}!`);
    passportNo = pp
    readline.close();
  });
  readline.question(`What's your name?`, nt => {
    // console.log(`Hi ${name}!`);
    nationality =nt
    readline.close();
  });
  readline.question(`What's your name?`, ids => {
    // console.log(`Hi ${name}!`);
    id =ids
    readline.close();
  });
  readline.question(`What's your name?`, pass => {
    // console.log(`Hi ${name}!`);
    password = pass
    readline.close();
  });

class AdminAccess{
    
    constructor(){
       this.routes = [
        
             {
                routesPath : "London To Pune",
                time : "11.30",
                flightType : "Boing-777",
                price : 23333

            },
            {
                routesPath : "London To Mumbai",
                time : "11.30",
                flightType : "Boing-777",
                price : 23333
                
            },
                {           
                 routesPath :"London To Ahamedabad",
                time : "22.33",
                flightType : "AIRBUS-566",
            price : 4444 }
        
       ]

    //    this.routes = this.routes + routes

       

    }
    confirmBooking(passagner,seatNumber){
        console.log(`flight seat no${seatNumber} for Passaner Name ${passagner} has Been confirmed`)


    }
    handleCancellationRequest(passagner,seatNumber){
        console.log(`flight seat no${seatNumber} for passenger Name ${passagner} has been cancalled`)

    }
    displayRoutes(){
        console.log(this.routes)
    }
    addRoutes(route){
        this.routes.push(route)
    }

    // getConfirmation(){
    //     return this.#confirmBooking
    // }
    // get getAddRoutes(){
    //     return this.#addRoutes
    // }
    // getHandleCancellationRequest(){
    //     return this.#handleCancellationRequest
    // }
}



class PassagnerAccess   {
    constructor(seatNumber,passenger){
        // this.seatNumber = seatNumber
        // this.passenger = passenger

    }

    
    booking(seatNumber,passagner){
        console.log(`flight seat for ${seatNumber} for passenger Name ${passagner} has Been confirmed`)


    }
    cancellation(passagner,seatNumber,reason){
        console.log(`flight seat for ${seatNumber} for passenger Name${passagner} cancel due to ${reason}`)

    }
    
}
class Reservation {
    constructor(flight,passenger,seatNumber){
        this._flight = flight;
        this._passenger = passenger;
        this._seatNumber = seatNumber;
    }
}




class loginCounter{
    #adminId = "AIR-77-DGCA-AB"
    #adminPassward = 12345
    constructor(name,passportNumberhere,nationality,IdVerify,passVerify){
        this.name = name
        this.passportNumber = passportNumberhere
        this.nationality = nationality
        this.IdVerify = IdVerify
        this.passVerify = passVerify
    }

    passengerLogin(){
        return this.passVerify 
    }


    verification(id,pass){
        if(this.#adminId === id && this.#adminPassward === pass){
            console.log("Admin Authorized NOW")
            const adminAccess = new AdminAccess()
            return adminAccess
        }
        if(this.IdVerify = id && this.passVerify == pass){
            console.log("Passagner Authorized NOW")
            const passagnerAccess = new PassagnerAccess()
            return passagnerAccess

        }
        else{
            console.log("Invalid Authorization")
        }
        
        

        
    }
}

class flight  extends loginCounter{
    constructor(name,passportNumberhere,nationality,IdVerify,passVerify){
        super(name,passportNumberhere,nationality,IdVerify,passVerify)
        this.passangers = []

    }
    bookingPassanger(seatNumber){
        const reservation = new Reservation(this,this.name,seatNumber)
        console.log(`Reservation confirmed for ${this.name} `)
        this.passangers.push(reservation)
        // console.log("passegners here",this.passangers)
        return reservation
    }

    static getPassenger(){
        return console.log(this.passangers)
    }
}

// let name


const passagner = new flight(name,passportNo,nationality,id,password)
console.log(passagner)

passagner.bookingPassanger("kartikey",22)
console.log(passagner.getPassenger())

passagner.bookingPassanger("bussiness")
passagner.verification("1234","kkhhere")
const passagner1 = new flight("jitesh kumar","IND345","spanish","1234","ohhh")
console.log(passagner1)

passagner1.bookingPassanger("economical")
flight.getPassenger()


// passagner1.verification("1234","ohhh")
passagner1.bookingPassanger("luxilary")
console.log(passagner1)

const admin = new flight()
const adminOnly =admin.verification("AIR-77-DGCA-AB",12345)
adminOnly.confirmBooking()
adminOnly.handleCancellationRequest()
adminOnly.addRoutes({routesPath :"London To Ahamedabad",
time : "22.33",
flightType : "AIRBUS-566",
price : 12344555123324 })



const admins = new AdminAccess()

admins.displayRoutes()





admins.getAddRoutes({routesPath :"London To Ahamedabad",
time : "22.33",
flightType : "AIRBUS-566",
price : 12344555 })




admins.displayRoutes()
admins.displayRoutes()

const passangerAccess1 = new PassagnerAccess()





passangerAccess1.displayRoutes()
passangerAccess1.booking("kumar Kartikey","economical")
passangerAccess1.cancellation("economical","kumar kartikey","personal reason")
// passangerAccess1.getAddRoutes(


//////////

const passegnerAccess = passagner1.verification("1234","ohhh")
passagner1.bookingPassanger("economical")
passegnerAccess.cancellation()
passegnerAccess.booking()









