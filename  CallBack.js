// let x = function(){
//     console.log('I am Function Called from Another Function');
// };
// let y = (msg,callBack)=>{
//     console.log('Do Somthing Here');
//    //msg();
//    callBack();
//    console.log(msg);
   
// }
// y("Here string:",x);






// let calc = function(num1,num2,calcType){
//     if(calcType == 'add' || calcType == '+'){
//         return num1+num2;
//     }
//     else if(calcType == 'sub' || calcType == '-'){
//         return num1-num2;
//     }
//     else if(calcType == 'mul' || calcType == '*'){
//         return num1-num2;
//     }
//     else if(calcType == 'div' || calcType == '/'){
//         return num1-num2;
//     }
//     else{
//         console.log("");
        
//     }
// }
// console.log(calc(30,40,'add'));
// console.log(calc(30,40,'*'));


let add = function(a,b){
    return a+b;
}
let sub = function(a,b){
    return a-b;
}
let Mul = function(a,b){
    return a*b;
}
let div = function(a,b){
    return a/b;
}
let other = function(a,b){
    return "Not Implemented";
}
let calc = function(num1,num2,callBack){
    if(typeof callBack == 'function'){
        return callBack(num1,num2);
}
else{
    console.log("Calculating Type Should Be A function");
    
}
}
console.log(calc(40,20,add));
console.log(calc(40,20,Mul));
console.log(calc(40,20,other));

