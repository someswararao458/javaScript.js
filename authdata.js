var name = prompt('Enter your Name');
var emailId = prompt('Enter your emailId');
var passwd =prompt("Enter Your passwd");
const email = 'somu0458@gmail.com'
const pass = 9490412808
var login = function(){
    if(email === emailId){
        alert('User Found');
        if(passwd === pass){
            alert('Login Successfully')
        }
        else{
            prompt("Invalid User")
        }
    }else{
            prompt("Usr Not Found");
        }
    }
login();