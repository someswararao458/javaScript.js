alert('Are you ready,Enter your age')
let age = prompt("Enter FaceBook Users Age");
if (age>10 && age<18 && typeof age == 'number'){
    console.log("This user are below teen age");

}
else if(age>19 && age<=25){
    console.log("This Users are pure youth");
}
else if(age>25 && age<50){
    console.log("This users are old age");
}
else{
    console.log("Not valid for this age in my facebook App");
}