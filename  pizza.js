  
var pizza = new Array();
var Object={};
var names = [""]
var NonVegPizzaPrice = [400,200];
var vegPizzaPrice = [500,400,300,200];
var pizzaType = prompt(`Which Pizza Do You Want
                     1.NonVeg Pizza
                      2.vegPizza
                      3.exit`)

    var order = function (MyValue, aa, callBack) {
        if (typeof callBack == 'function') {
            return callBack(MyValue, aa);
            
         }
        } 
        function mul(MyValue,aa){
            return MyValue*aa;
        }
    switch(pizzaType){

        
        case '1':
        var order1 = prompt(`which Pizza Do You Want
            1.ChickenPizza
            2.MuttonPizza`);
            if(order1 == 1 && order1 == 2){
            }
             var aa = prompt("How Many Pizza's Do You Want");  
            
         for (let index = 0; index < NonVegPizzaPrice.length; index++) {
             
            var MyValue = index[1];
            console.log(order(MyValue,aa,mul))             

            }

        order(MyValue,aa);
        break;
        default:
            }
        
    


    