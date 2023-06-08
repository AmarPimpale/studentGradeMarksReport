
import { loginBoard } from "./fileClassLogin"

const rl = readline.createInterface({
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

    loginBoard(name,passNo,nationality,id,passwaord)
})  
})
})
  
}) 

})


