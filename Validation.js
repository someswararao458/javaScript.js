var name = prompt("Enter Your Name");
var Email = prompt("Enter Your Email");
var Age = prompt("enter Your Age");
var validation = new Promise(function(resolve,reject){
    var user = {}; var error ={};
    if(isEmpty(name) || isNull(name) || isUndefined(name)){
       error.msg = "Name field Can Not be Empty!"
       reject(error);
    
    reject("")
}else{
    user.name=name;
    resolve(user)
}

if(isEmpty(name) || isNull(Email) || isUndefined(Email)){
    error.msg = "Name field Can Not be Empty!"
    reject(error);
 
 reject("")
}else{
 user.Email=Email;
 resolve(user)
}

if(isEmpty(name) || isNull(Age) || isUndefined(Age)){
    error.msg = "Name field Can Not be Empty!"
    reject(error);
 
 reject("")
}else{
 user.Age=Age;
 resolve(user)
}
});
validation.then(function(user){
console.log(user);
}).catch(function(error){
    console.log(error);
    })
    function isEmpty(value){
        return (value === "")?true:false;
    }
    function isNull(value){
        return (value===null)?true:false;
    }
    function isUndefined(value){
        return (value===undefined)?true:false;
    }
