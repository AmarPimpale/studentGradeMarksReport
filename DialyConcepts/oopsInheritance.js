


class GrandFather {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName  = ln
    }

    displayGFN(){
        console.log(`Gf Name : ${this.firstName} ${this.lastName}`)
    }
}


class Parent extends GrandFather{
    constructor(fn,ln,pfn){
        super(fn,ln)
            this.parentFirstName = pfn
        
    }
    displayPN(){
        console.log(` pf Naem : ${this.parentFirstName} ${this.firstName} ${this.lastName}`)
    }
}

class Son extends Parent{
    constructor(fn,ln,pfn,sfn){
        super(fn,ln,pfn)
        this.sonFirstName = sfn
            
    }
    displaySN(){
        console.log(this.sonFirstName + this.lastName)
    }
}




const amar = new Son("dy","pimpale","Arjun","Amar")
console.log(amar);

amar.displayGFN()
amar.displayPN()
amar.displaySN()