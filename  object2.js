var john = {
    firstName:"john",
    lastName:"smith",
    age:28,
    gender:"Male",
    ismarried:"true",
    children:null,
    address:[{},{}]
}
var data = 'age' in john;
console.log(data);
for (key in john){
    console.log("Yhe Key is:"+key+"the Value is: "+ john[key]);
}
//to generate length property
var keysData = object.keys(john);
console.log(keysData);
for(index=0;index<object.keys(john).length;index++){
    console.log(object.keys(john)[index]+"value:"+john[object.keys(john)[index]]);
}