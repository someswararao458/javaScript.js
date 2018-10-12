var c =0;
var section = document.createElement('section');
function addPara(){
var p = document.createElement('p');
var input = document.createElement('input');
p.setAttribute("id",`para${c}`);
p.setAttribute("class","para");
p.setAttribute("name","email");
p.innerText = `Para Text${c}`;
section.appendChild(p);
document.body.appendChild(section);
c++
}
function select(){
    console.log(classPara);
        var classPara = document.getElementsByClassName('p');
    
    document.getElementById('para2').innerText="New Para"
    // var allPara = document.querySelectorAll('p');
    // //console.log(allPara[0]);
     for(var index=0;index<allPara.length;index++){
         console.log(allPara[index]);
             }
    }
    function sendText(){
        var email1 = document.getElementById('email1');
        console.log(email.value);
        email.value='Default value';     
    }
        function clearText(){
            var email = document.getElementById('email1')
          email1.value=';'
        }
