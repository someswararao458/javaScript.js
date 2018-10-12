var section = document.createElement('section');
var register = document.createElement('button');
var email = document.createElement('input');
var name1 = document.createElement('input');
var password = document.createElement('input');
section.innerHTML='<h1>Registration Here</h1>'
 register.setAttribute('id','send');
register.setAttribute('type','button');
register.innerText = 'Send Data';

email.setAttribute('id','name1');
email.setAttribute('type','text');
email.placeholder = 'Enter your name';
 
name1.setAttribute('id','name1');
name1.setAttribute('type','text');
name1.placeholder = 'Enter your name';

password.setAttribute('id','password');
password.setAttribute('type','password');
password.placeholder = 'Enter your password';

 section.appendChild(register);
 section.appendChild(email);
 section.appendChild(name1);
 section.appendChild(password);
document.body.appendChild(section);

var section2 = document.createElement('section');
var login = document.createElement('button');
var emailL = document.createElement('input');
var passwordL = document.createElement('input');
section2.innerHTML='<h1>login Here</h1>'

login.setAttribute('id','login');
login.setAttribute('type','button');
login.innerText = 'Login';

emailL.setAttribute('id','email');
emailL.setAttribute('type','email');
emailL.placeholder = 'Enter Your Email';

passwordL.setAttribute('id','password');
passwordL.setAttribute('type','password');
passwordL.placeholder="Enter Your Password";

section2.appendChild(emailL);
section2.appendChild(passwordL);
section2.appendChild(login);
document.body.appendChild(section2);
var records = [];
var user = {};
var sendButton = document.getElementById('send');
sendButton.addEventListener('click',function(){
    user.email = document.getElementById('email').value;
    user.name = document.getElementById('name');
    user.password=document.getElementById('password').value;
    records.push(user);
    console.log(user);
});
var loginButton = document.getElementById('login');
loginButton.addEventListener('click',function(){
email= document.getElementById('email').value;
password = document.getElementById('password').value;
console.log(user);
var h2 = document.getElementById('h2');
if(user.email===email && user.password === password){
    h2.innerText = "Login Successfull";
    console.log("login Successfull");
}else{
    h2.innerText="Login Fail";
    console.log("1");
}
section2.appendChild(h2);
});

