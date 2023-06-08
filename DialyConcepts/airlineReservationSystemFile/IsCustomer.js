

import * as customer from '../ars/customer.js'
// import * as flight from '../ars/flight.js'


import { createInterface } from 'readline'


let customerList = [
    {
        userName : "kartikeyKumar123",
        userEmail : "kartikeyKumar123@gmail.com"
    },
    {
        userName : "karanKumar123",
        userEmail : "karanKumar123@gmail.com"
    }
] 




export class isCustomer{
    constructor(){

    }
    checkIsCustomer(email,userName){
        console.log(email)

        customerList.map((user)=>{
            // console.log(user.userEmail)
            if(user.userEmail!==email){

                console.log("Create Customer.......")
                const rl = createInterface({
                    input: process.stdin,
                    output : process.stdout,
                    terminal : false
                })
                let userId 
                let email
                let name 
                let address 
                let phone 
                let age 
                let passwaord

                rl.question("Enter UserId  :",function(string){
                    userId = string
                rl.question("Enter Email:", function(string){
                    email = string
                rl.question("Enter name: ",function(string){
                    name = string
                rl.question("Enter adress: ",function(string){
                    address = string
                rl.question("Enter PhoneNo. : ", function(string){
                    phone = string
                rl.question("Enter Age : ",function(string){
                    age = string
                rl.question("Enter Passwaord",function(string){
                    passwaord =  string
                    rl.close()
                
                    let c1= new customer.Customer(userId,email,name,address,phone,age,passwaord)
                    return c1
                })
                })
                
                })  
                })
                })
                   
                }) 
                
                })
                
                

            }else{

                console.log("Your are Our customer Welocme!!!!!!!!!!!!!","continous To Book a Flight")

            

            }
            
        })

       
            
       
    }
}



