var Elements = ["Apple","Mango","Orange","PiApple","Banana"];
console.log(Elements);
var Fruits = prompt("Do you want fruits")
if(Fruits=='yes'){
    var AppleCost =25;
    var MangoCost =50;
    var OrangeCost =2;
    var PiAppleCost = 30;
     var BananaCost =5;
    for(f=0;f<6;f++){
        if(Element[f]="Apple"){
            var count = prompt("How many Apples Do you want");
            console.log("Cost of Apples:",count*AppleCost);
         }
             if(Element[f]="Orange"){
            var count = prompt("How many Orange Do you want");
            console.log("Cost of Oranges:",count*OrangeCost);
         }
             if(Element[f]="Mango"){
            var count = prompt("How many Mangos Do you want");
            console.log("Cost of PiApples:",count*MangoCost);
          }
           if(Element[f]="PiApple"){
            var count = prompt("How many PiApple Do you want");
            console.log("Cost of Apples:",count*PiAppleCost);
         }
           if(Element[f]="Banana"){
            var count = prompt("How many Banana Do you want");
            console.log("Cost of Bananas:",count*BananaCost);
    
        }
        break;
    }
}


