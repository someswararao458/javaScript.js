let promiseToClean = new Promise(function(resolve,reject){
let isClean = false;
if(isClean){
    resolve('The room is Clean');
}else{
    reject('The Room is Not Clean');
}
});
promiseToClean.then(function(optFromResolve){
console.log(optFromResolve);
return optFromResolve;
}).then(function(optFirstPromise){
    var result = `${optionFirstPromise} now you can Remove Garbage`
console.log(result);
return result;
});