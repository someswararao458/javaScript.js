//constructor is a special function that represents the 
//constructor are use to instanciate an object 
//constructor are use to create Dynamic  object 
//constructor are use initialize default values for object

function Projector(company,size,price,warrenty){
this.company=company;
this.size=size;
this.price=price;
this.warrenty=warrenty;  
//this variable refers to current working object
}
let projector = new Projector("eoson",'2x2',40000,'2years');
projector.size ="3x4 cm"
console.log(projector);
let projector1 = new Projector("Sony",'2x2',40000,'2years');
projector1.size ="3222222x43333 cm"
console.log(projector1);