
// airline resevation app here


// class airlineAdmin{
//     constructor(isAdmin,isUser){
//         this.isAdmin= isAdmin
//         this.isUser = isUser
//     }

//     if(_isAdmin){
//         this.scheduleFlite = function(){
//             return `${this.dispatureVenue} to  ${this.destinationVenue}` 
//         }
//     }
//     if(_isUser){
//         this.bookFlite = function()
//     }
    

// }

class airportMangment{
    adminId = "Air-1-DGCA-001"
    
    adminPassward = "winter_start-dec-21"
    constructor(adminVerifyId,adminVerifyPass){
        this.#adminVerifyId = adminVerifyId 
        this.#adminVerifyPass = adminVerifyPass

    
    }
    adminIdnetification(){

        if(this.#adminId = this.adminVerifyId && this.#adminPassward == this.adminVerifyPass){
          console.log("Admin is Authorized Now")
            
        //   bookingConfirmation(userBook,userPayment){
        //       if(userBook && userPayment ){

        //       }
        //   }

        }
        else{
           console.log("Admin Authorization Denied")
        }
       }

    routeList(){
        let routes = {
            routeEurope : {
                fliteAirIndia :{
                    filteCode : "EAI-1",
                    time : 11.30,
                    class : "Economy",
                    price : 5000
                },
                filteAirBus : {
                    filteCode : "EAB-1",
                    time : 13.11,
                    class : "Bunniess",
                    price : 1000
                },
                filteBoiing : {
                    filteCode : "EB-777",
                    time : 23.11
                    ,
                    class : "Economy",
                    price : 2000
                },
                routeAsia : {
                    fliteAirIndia :{
                        filteCode : "AAI-1",
                        time : 11.30,
                        class : "Economy",
                        price : 5000
                    },
                    filteAirBus : {
                        filteCode : "AAB-1",
                        time : 13.11,
                        class : "Bunniess",
                        price : 1000
                    },
                    filteBoiing : {
                        filteCode : "AB-777",
                        time : 23.11
                        ,
                        class : "Economy",
                        price : 2000
                    }
            }
            
        }
        
    }
    return routes
}
    bookingConfimation(){
        if(this.booking && this.paymentDone){
           console.log("Your flight Has been Book! Thank for Booking")
        }
   }
}
class createPassangerAccount extends airportMangment{
    #passwardField
    constructor(name,address,passortNumber,nationality,passward){
        super()
        this.name = name 
        this.address = address
        this.passportNumber = passortNumber
        this.nationality = nationality
        this.#passwardField = passward
    }

    getPassward(){
        return this.#passwardField
    }

     getPassangerDetails(){
                return console.log(`Passanger Name : ${this.name} \n Passport No. ${this.passportNumber} \n Nationality : ${this.nationality}`)
            }
    
    
}

class passangerLogin extends createPassangerAccount {
      constructor(name,address,passortNumber,nationality,passward,getName,getPassward){
        super(name,address,passortNumber,nationality,passward)
        this.getName = getName
        // this.getPassward = getPassward
       
        
      }


      giveAccess(passwardVerify){
        if(this.getPassward() === passwardVerify  ){
            
            
           return `This Account is Memeber ${this.name} And Is Authorizied Now`
           
        }
        else{
            return `access Denied here`
        }
    }

      
}

const passagner = new passangerLogin("Kartikey Kumer here","From Mars","123454","Marsian","kk@newPassward")
console.log(passagner)

passagner.getPassangerDetails()
const access = passagner.giveAccess("kk@newPassward")
console.log(access)

const route = passagner.routeList()
console.log(route.routeEurope.filteAirBus)



const admin = new airportMangment("Air-1-DGCA-001","winter_start-dec-21")
console.log(admin)
admin.adminIdnetification()