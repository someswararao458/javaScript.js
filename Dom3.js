var ele = document.createElement('section');
var elePara = document.createElement('p');
var eleH1 = document.createElement('h1');
eleH1.innerHTML = `<h1> Welcome to Dom Manipulation</p>`
eleH1.innerHTML = `<h1> Welcome to new Dom Manipulation</p>`

console.log(eleH1.innerHTML);
console.log(eleH1.outerHTML);

elePara.innerText="Here all Bout Class"
//console.log(elepara.innerHTML);

ele.appendChild(eleH1);
Element.appendChild(elePara);
document.body.appendChild(ele);