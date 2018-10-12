var accounts = [];
 var user = new Object();
while(true){
var option = prompt(`Welcome to money bank
                    1.Open account,
                    2.Show balance,
                    3.Withdraw,
                    4.Deposite,
                    5.Fixed deposite
                    6.Exit`)
                     if (option =='1' || option == '2' || option == '3' ||
                         option == '4'|| option == '5' || option == '6') {
                           switch(option){
                               case '1':
                               openAccount();
                               break;
                           case '2':
                           showBalance();
                           break;
                            }    

                        }                          
                           else{
                              alert("You Have Choose Invalid Option");
                           }
                        }
                        // Account Opening Details
                        function openAccount(){
                        const accountNum = prompt("Enter Account Number");
                        const openingBalance = prompt("Enter Opening Balance");
                        const accountEmail = prompt("Enter Your Email");
                        const AccountPhoneNo = prompt("Enter Your Phone Number");
                                         user.name = accountNum;
                                         user.balance = openingBalance;
                                         user.Email = accountEmail;
                                         user.phoneNo = AccountPhoneNo;
                                         accounts.push(user);
                         alert("Account opened successfully")
                        console.log(accounts);

                        }
                       
                        //Show Balance Process
                        function showBalance() {
                            var accountNum = prompt('enter account no')
                            var bal = findAccount(accountNum);
                                console.log('account no: '+bal.name+' balance:', bal.balance)
                        }
                            
                            //withdraw process
                            //var acc
                        

                        
                       