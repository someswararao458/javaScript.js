let accessFlag;
let age = prompt("How old are you");
/*if(age>18){
    accessFlag = true;

console.log("Your Allowed to drive");
}
else{
    accessFlag = false;
    console.log("Your Not Allowed drive");

}
console.log(accessFlag);*/
//accessFlag = (age>18)? "allowed":"Not allowed";
//console.log(accessFlag);
accessFlag = (age>3 && age <15)? "You are a Baby Not allowed to Drive":
               (age>15 && age<18)? "Your Dont have a Licence to Drive":
               (age>=18)? "Your Allowed to Drive":
               "Not Allowed ..No Information...Invalid";
               console.log(accessFlag); 