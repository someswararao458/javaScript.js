// var counter = 10;
// while(counter>0){
// console.log(counter);
// counter --;
// }
var counter= function(value){
    if(value>0){
        console.log("The Number " + value);
        return counter(value-1)
    }
    else{
        return "Condition False:"+value;
    }
}
counter(10);