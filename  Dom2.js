c=0
var ulelem = document.createElement('ul');//to create particular element ex:'ul'.'li','Botton'...
function somu() {
//var liEle = document.createElement('li');
//liEle.ssss = prompt("Enter your item");
var butt = document.createElement('Button');
butt.innerText=`Item${c}`
ulelem.appendChild(butt);
document.body.appendChild(butt)
c++;
 }
somu()
// var somu = document.createElement('ul');
// somu.innerText="Hello How Are";
// document.body.appendChild(somu);