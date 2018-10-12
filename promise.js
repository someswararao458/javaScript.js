var promise = new Promise(function(resolve,reject){
    resolve(1000);
});
promise.then(first).then(second).then(third).then(function(response){
    console.log("The Last Result:",response);
    
}).catch(function(error){
    console.log(error);
})
//function first(amount){
  //  console.log("The Amount in First",First);
    
    //return amount*2;
//}
function first(amount,callback) {
    console.log("The Amount in First",first;

    return(amount*2)
}
function second(amount,callback) {
    console.log("The Amount in First",second);

    return(amount*2)
}
function third(amount,callback) {
    console.log("The Amount in First",third);

    return(amount*2)
}
