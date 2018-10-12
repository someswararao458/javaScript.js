var somu = document.createElement('section');
function ramdomImages(){
//var aaa = new images();

    var roll = Math.floor((Math.random()*6)+1);
    console.log(roll);
    var input = document.getElementById('input1').value;
    value = roll;
    
    var img = document.querySelector('img');
    if(roll == 1){
    img.setAttribute('src','/home/somu/fullStack/JavaScript/img/1.png')

    }
    else if(roll == 2){
        img.setAttribute('src','/home/somu/fullStack/JavaScript/img/2.png')
    }
    else if(roll == 3){
        img.setAttribute('src','/home/somu/fullStack/JavaScript/img/3.png')
    }
    else if(roll == 4){
        img.setAttribute('src','/home/somu/fullStack/JavaScript/img/4.png')
    }
    else if(roll == 5){
        img.setAttribute('src','/home/somu/fullStack/JavaScript/img/5.png')
    }
    else{
        img.setAttribute('src','/home/somu/fullStack/JavaScript/img/6.png')
    }
 
document.body.appendChild(somu); 
}
     