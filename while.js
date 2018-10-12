var count = 3;
//while(count>0){
  //  console.log("the count is",count);
    //count=1;
    //console.log(count);
//}
let OTP ="234456677";
do{
    if(count >=1){
    
    console.log("The OTP is:",OTP);
    count--;
    }
    else{
        if(count == 0){
        OTP=567989;
        console.log(OTP);
        let value = (count == 0)?OTP:"Not Allowed";
        console.log("Your OTP is:",value);
        count++;
    }
}
while(count<0);