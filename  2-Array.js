var ips = ["192.168.13.1","192.168.13.2","192.168.13.3","192.168.13.4","192.168.13.5","192.168.13.6",
"192.168.13.7","192.168.13.8","192.168.13.9","192.168.13.10"];
var ages = [28,23,25,44,66,88];
var names =["john smith","Rohn Smith","Will Smith"];
combo =[ips,names];
//combo = [ips,names,age,"This is String"];
console.log(combo);
for(var comboIndex =0;comboIndex<combo.length;comboIndex++){
    console.log(combo[comboIndex])
}