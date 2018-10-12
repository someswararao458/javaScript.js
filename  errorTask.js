//var firstName = prompt("Enter Your firstName");
//var lastName = prompt("Enter Your lastName");
var fullName = prompt("Enter Your Name");
if (fullName != /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/) { 
console.log("Name: " + fullName);
}
else {
    alert("Invalid");
}

var mobileNo = prompt("Enter Your MobileNo");
//var alphaExp = /^[a-zA-Z]+$/;
if (mobileNo != /^[a-zA-Z]+$/){
    console.log("MobileNo: ", mobileNo);
}
else {
    alert("Invalid");
}
var Email = prompt("Enter Your Email");
console.log("Gmail: ", Email);
var passwd = prompt("Enter Your Passwd");
if (passwd.length<10) {
}
var repasswd = prompt("Re-Enter passwd");
if (passwd == repasswd) {
console.log("passwd: ", repasswd);

}
else {
    alert("Invalid passwd");
}
if (fullName.length < 15 && fullName  !== null) {
}
else {
    alert("please choose certain length");
}
