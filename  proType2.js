function lapTop(Reading,Writing,Typing,watching,Browseing){
     this.Reading = Reading,
     this.Writing = Writing,
     this.Typing = Typing,
     this.watching=watching,
     this.Browseing=Browseing
}
lapTop.prototype.battery = "50%"
lapTop.prototype.battery = function(newBatery){
    this.battery = newBatery
}
var mylapTop = new lapTop("Concepts","Information","Words","movies","Data");
console.log(mylapTop);
mylapTop.Typing = "charectors";
console.log(mylapTop)
console.log(mylapTop.battery);












// Motor.prototype.speed = 200;
// Motor.prototype.changeSpeed = function(newSpeed){
// this.speed = newSpeed;
// }