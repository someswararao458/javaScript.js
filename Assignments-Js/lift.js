alert('lift')
let liftNumber = prompt("Enter floor number");
if(liftNumber <0){
    alert("lift going to down")
}
if(liftNumber>0){
    alert("lift going to up")
}
alert(liftNumber +"floor 'doors open'");
for(i=0; i<10; i++){
    let xxx = prompt('Enter floor number');
    if(xxx> liftNumber){
        alert("lift going up")
        alert(xxx + "floor 'doors open'")
    }
    else if(xxx <liftNumber){
        alert("lift going down")
        alert(xxx + "floor 'doors open'")

    }
    else{
        alert("samefloor, doors open")
    }
    liftNumber = xxx;
}