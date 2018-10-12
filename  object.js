/*var names = new Array("john","ramu","somu");
console.log(names);
names.push(32);
console.log(names);*/
var john = {
    firstName:"john",
    lastName:"smith",
    age:28,
    gender:"Male",
    ismarried:"true",
    children:null
}
//john.Address = flatNo :"eerrr",
//society:"Royal Pavilion",street:"reddy street"
//In the object stored in arrey
john.children=["Johny","rohny"];
console.log(john);
console.log(john['age']);
console.log(john['lastName']);

console.log(john.age);
console.log(john.lastName);
console.log("The Name:" + john.lastName + " age:"+ john.age);
john.age=55;
console.log(john.age);
console.log(john.Address.society);
var Addresses = new Array90;
Addresses[0]=john.Address