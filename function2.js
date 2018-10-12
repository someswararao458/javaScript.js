//self invoking function
// (function hero(){
//     console.log=("I am hero");
//     console.log(name,age);
// }

// ("JohnSmith",29));
//Function TYpe based on Structure
//1.FUNCTION Declaration
//2.Function Expression ---> 1.labled Fe 2. labled anonymous
// 

heroInfo();
//if we use fn declaration then we can invoke a fn before it 
var heroData = function heroInformation(){
    console.log("Hero Dont Show Info");
    return 20;
}
console.log(heroData);
heroInfo();
var heroInfo = function(){
    console.log(" This is Hero Info");
    return true;
}
console.log(heroInfo);
