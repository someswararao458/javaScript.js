var x = function () {
    return "Pizza is Prepared";
}
console.log(x());
var mul = function () {
    return CpizzaPrice * aaa;
}
var mul2 = function () {
    return VpizzaPrice * bbb;
}
var disPatch = function () {
    return "Order is Dispatched Just Now";
}
console.log(disPatch());

    var aaaa = setTimeout(() => {
console.log(delivery());
        
    }, 5000);

var delivery = function () {
    return "You Order Will Delivered"
}
//while (true) {
    var pizzaType = prompt(`Which Pizza Do You Want
                     1.NonVeg Pizza
                      2.vegPizza
                      3.exit`)

    var order = function (CpizzaPrice, aaa, callBack) {
        if (typeof callBack == 'function') {
            return callBack(CpizzaPrice * aaa);

        }
    }
    var order2 = function (VpizzaPrice, bbb, callBack) {
        if (typeof callBack == 'function') {
            return callBack(VpizzaPrice * bbb);
        }
    }
    switch (pizzaType) {
        case '1':
             prompt(`Types
             1.Chicken Pizza
             2.Mutton Pizza`)
            var aaa1 = +prompt("How Many Chicken Pizza's Do You want")
            var aaa2 = +prompt("How Many Mutton Pizza's Do You Want")
            alert("Chicken Pizzas Is Ordered")
            order(CpizzaPrice, aaa);
            console.log("Chicken Pizza Cost Is:", order(CpizzaPrice, aaa, mul));
            break;
        case '2':
        prompt(`Types
        1.Paneer Pizza
        2.Corn Pizza
        3.Onion Pizza
        4.Musroom Pizza`)
            var bbb1 = +prompt("How Many Paneer Pizza's Do You Want")
            var bbb2 = prompt("How Many Corn Pizza's Do You Want")
            var bbb2 = prompt("How Many Onion Pizza's Do You Want")
            var bbb2 = prompt("How Many Musroom Pizza's Do You Want")  
            alert("Veg Pizzas Is Ordered")
            order2(VpizzaPrice, bbb)
            console.log("Veg Pizza Cost Is:", order2(VpizzaPrice, bbb, mul2));
            break;
        default:
            console.log("Invalid Option");
    }
