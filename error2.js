try{ 
        var employee = {
            name:"somu",
            id:3333,
            age:34,
            sal:4444,
            dept:'Dev',
            address: 'Ameerpet'
        }
        function employee(){
            try{
            var empString = JSON.stringify(employee)
            alert(empString);
    }catch(error){
        console.log(error.name);
        
    }
}
employeeData();
}catch(error){
    console.log("Outer Error Handler ",error.name);
}
        