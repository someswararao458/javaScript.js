first(1000,function(firstResult,error){
if(!error){
    console.log("First Callback Result",firstResult);
    second(firstResult,function(secondResult,error){
        if(!error){
            console.log("Second CallBack Result",secondResult);
        
        
    third(secondResult,function(thirdResult,error){

    if(!error){
        console.log("Third CallBack Result",thirdResult);
    }
    else{
console.log("Error occurs In third CallBack")
    }
})
}else{
    console.log("Error occurs In Second CallBack")
          }
      })

}else{
    console.log("Error occor In First CallBack")
}
})
function first(amount,callback) {
    callback(amount*2,false)
}
function second(amount,callback) {
    callback(amount*2,true)
}
function third(amount,callback) {
    callback(amount*2,false)
}
