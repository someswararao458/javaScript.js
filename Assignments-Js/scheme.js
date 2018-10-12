alert("Are you ready to Enter your Amount");
//if()
let scheme = prompt("Enter your Firstscheme");
if(scheme >=1000 && scheme<2000){
console.log("This is Your",scheme*2);
}
else if(scheme >=2000 && scheme<50000){
    console.log("This is Your",scheme*10);
    }
    if(scheme >=50000 && scheme<100000){
        console.log("This is Your",scheme*20);
        }
        if(scheme >=100000 && scheme<200000){
            console.log("This is Your",scheme*30);
            }
            else{
                console.log("Invalid amount");
            }