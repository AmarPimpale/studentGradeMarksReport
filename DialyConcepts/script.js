


// for(var i=0;i<=3;i++){
//   (  function outer(i){
//     setTimeout(function log(){
//         console.log(i)
//     },1000)
// })(i)


// }



for(let i=0;i<=3;i++){
    setTimeout( function log (){
        console.log(i)
    },1000)
    
}
// log()