 
    function Motor(type,wheels,name,company,color){
    this.name = name;
    this.color= color;
    this.type = type;
    this.company = company;
}
Motor.prototype.speed = 200;
Motor.prototype.changeSpeed = function(newSpeed){
this.speed = newSpeed;
}
var bike = new Motor('petrol',2,'Apache','TVS','black');
console.log(bike);
bike.name='Scooty';
bike.cc ='100cc';
console.log(bike);
console.log(bike.speed);
var car = new Motor('desial',4,'verna','Honda','black');
console.log(car);
console.log(car.speed);
car.changeSpeed(4000);
console.log(car.speed);