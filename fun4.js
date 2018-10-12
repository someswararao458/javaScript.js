var hero = {
    name:"Super Man",
    power:["Flying Power","Leaser Eyes","Muscle Power"],
    age:29,
    yearBirth:1989,
    address:{
        streat:"Golden Streat",
        pincode:100001,
        state:"us"
    },
    readPower :function readPower(){
         return this.power;
    }
}
var heroInfo = function(heroData){
    console.log(heroData);
}
heroInfo(hero);
var readHearoin = ()=>{ //anonymous arrow function
return "Super Women";
}
 hero.readHearoin=readHearoin;
 console.log(hero.readHearoin());
 console.log(hero.readPower());
 var removePower = (index)=>{
     hero.power.splice(index,1);
     return hero.power;
 }
 console.log(removePower());
 