


import * as isCustomer from  '../ars/IsCustomer.js'

import { createInterface } from 'readline'


    const rl = createInterface({
        input: process.stdin,
        output : process.stdout,
        
    })


rl.question("Enter User Email :",function(email){
rl.question("Enter your UserName :",function(userName){
    rl.close()
    const auth = new isCustomer.isCustomer()
    auth.checkIsCustomer(email,userName)
})
})