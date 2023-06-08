

class parent {
    constructor(name){
        this.name = name
    }

    welcome(){


        console.log("name is ",this.name)
    }
}

class child extends parent{
    constructor(name,age){
        super(name)
        this.age = age
    }
    welcome(){
        console.log("Name is",this.name,this.age)
    }
}


const objec= new child("Amar",25)
objec.welcome()