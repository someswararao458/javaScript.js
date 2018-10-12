// console.log(window);
// console.log(window.console);
// console.log(window.document);
// console.log(console);
// console.log(document);
function creationSection(){
    var elem = document.createElement('section');
    var elemPara = document.createElement('p1');
    var elemH1 = document.createElement('h1');
    elemH1.innerText = "welcome to Dom Manipulation";
    elemPara.innerText = "Here All About Dom Class";
    elem.appendChild(elemH1);
    elem.appendChild(elemPara);
    document.body.appendChild(elem)
}
function createDivision(){
    var elemDiv = document.createElement('section');
    var elemPara2 = document.createElement('p1');
    var elemH2 = document.createElement('h1');
    elemH2.innerText = "whatsapp";
    elemPara2.innerText = "hiiiiiiiii how are you";
    elemDiv.appendChild(elemH2);
    elemDiv.appendChild(elemPara2);
    document.body.appendChild(elemDiv);
}
