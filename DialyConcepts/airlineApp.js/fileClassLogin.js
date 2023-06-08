  
import { createInterface } from "readline";
  
  class loginCounter {
    #adminId = "AIR-77-DGCA-AB";
    #adminPassward = 12345;
    constructor(name, passportNumberhere, nationality, IdVerify, passVerify) {
      this.name = name;
      this.passportNumber = passportNumberhere;
      this.nationality = nationality;
      this.IdVerify = IdVerify;
      this.passVerify = passVerify;
    }

    passengerLogin() {
      return this.passVerify;
    }

    verification(id, pass) {
      if (this.#adminId === id && this.#adminPassward === pass) {
        console.log("Admin Authorized NOW");
        const adminAccess = new AdminAccess();
        return adminAccess;
      }
      if ((this.IdVerify = id && this.passVerify == pass)) {
        console.log("Passagner Authorized NOW");
        const passagnerAccess = new PassagnerAccess();
        return passagnerAccess;
      } else {
        console.log("Invalid Authorization");
      }
    }
  }

  class flight extends loginCounter {
    constructor(name, passportNumberhere, nationality, IdVerify, passVerify) {
      super(name, passportNumberhere, nationality, IdVerify, passVerify);
      this.passangers = [];
    }
    bookingPassanger(seatNumber) {
      const reservation = new Reservation(this, this.name, seatNumber);
      console.log(`Reservation confirmed for ${this.name} `);
      this.passangers.push(reservation);
      // console.log("passegners here",this.passangers)
      return reservation;
    }

    static getPassenger() {
      return console.log(this.passangers);
    }
  }

  // let name

  const rl = createInterface({
    input: process.stdin,
    output : process.stdout
})

let name = ""
let passNo = ""
let nationality 
let id 
let passwaord

rl.question("name  :",function(string){
    name = string
rl.question("your passNumber:", function(string){
    passNo = string
rl.question("your Nationality: ",function(string){
    nationality = string
rl.question("your id: ",function(string){
    id = string
rl.question("your passwoard", function(string){
    passwaord = string
 rl.close()

 const passengerAmar = new loginCounter(name,passNo,nationality,id,passwaord)
 console.log(passengerAmar)
 passengerAmar.verification("55","88")
})  
})
})
   
}) 

})


//   const passagner = new flight(name, passportNo, nationality, id, password);
//   console.log(passagner)

