

import * as user from '../ars/customer.js'

class MakingReservation{
    constructor(){

    }

    makingRersevation(){
        const object = new user.Customer("Amar","22",44)
        return object
    }
}



const making = new MakingReservation()

console.log(making.makingRersevation())
