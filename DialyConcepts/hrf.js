


function x(){
    console.log("Amar")
}

function y(x){
    x()
}


// y()


const radius = [1,2,3,4]

const area = function(radius){
  return  Math.PI * radius*radius
}

const calculate = function (radius,logic){
    const output = []
    for(let i= 0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area))

const calculateArea = function (radius){
    const output = []
    for(let i= 0;i<radius.length;i++){
        output.push(Math.PI * radius[i]*radius[i])
    }
    return output
}

console.log(calculateArea(radius))


