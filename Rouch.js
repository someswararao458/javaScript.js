function check(myform){
    var myname =  prompt("Enter Your Name");
    if (myform.myname.value == "" || myform.myname.value == null)
    {
      alert("Name is mandatory");
      return false;
    }
       if(myform.myphone.value == "" || myform.myphone.value == null)
       {
         alert("Phone number is mandatory");
         return false;
       }
       else{
         return true;
       }
     }
     check();
