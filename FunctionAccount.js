var user = new Object();
var account = new Array();
while(true){
    var operations = prompt(`Welcome To Money Bank 
1.create Account
2. show Balance
3.Widraw
4.Exit`)
}
if(operations == '1' || operation == '2' || operation == '3' || operation == '4'){
    switch(operation){
case '1':
openAccount();
break;
case '2':
showBalance();
break;
case '3':
widrawAmount();
default:
alert("Invalid option");
}
}else{
    break;
}

function widrawAccount(){
    var accountNo = prompt("Enter Account Number");
    var access = findAccount(accountNo);
    if(access){
        var amount = prompt("Enter a Amount To widraw");
        user.balance -= (+amount);
        alert(`${user.name} has Balanced ${user.balance}`);
    }
    else{
        alert("unautharaired user! Cannot form widraw");
    }
}
function findAccount(accountNo){
for(account in accounts){
    //console.log("Enter a Amount To Widraw");
    if(accounts[account].accountNo == accountNo){
        console.log("Account Found");
        return true;

    }
    else{
        console.log("Account Dont Exit");
        return false;
    }
}
}
function showBalance(){
    var accountNo = prompt("Enter Account Number");
    var access = findAccount(accountNo);
    if(access){
        alert(`${user.name} has balance :${user.balance}`)
    }
    else{
        alert("Unathorized user! Cannot perform widraw");
    }
}
function openAccount(){
    const accountNo = prompt("Enter Account Number:");
    const accountBalance = prompt("Enter Account opening Amount");
    var accountName = prompt("Enter Account Name:");
    var accountEmail = prompt("Enter Email Here");
    var accountPhone = prompt("Enter Phone Number Here");
    var user = new Object();``
    user.name= accountName;
    user.accountNo=accountNo;
    user.Email=accountEmail;
    user.phone = accountPhone;
    user.balance=Number(accountBalance);
    account.push(user);
alert("Account created Successfully");
}
