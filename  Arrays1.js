var values = ["ramu","somu","john","abdhul","rahaman","ajith","rakesh"];
for(var index=0;index<values.length;index++){
console.log(index + ":member:" + values[index]);
if(values[index]==="john"){
  //values[index] = "somu"
values.splice(index,1,"sandeep");
values.push("aaaaaaaaaaaaaaaaa");
values.push("bbbbbbbbbbbbb");
}
}
console.log(values);