var records = new Array();
alert('Welcome To My App');
var options = prompt(`Select Any One Option
                      1.Registration
                      2.Login`);
while(true){

                      switch(options){
                          case '1':
                          console.log("Registration Form is Selected");
                          var name = prompt("Enter Your Name");
                          var Email = prompt("Enter Your Email");
                          var Age = prompt("Enter Your Age")
                          var phoneNumber = prompt("Enter Your phoneNumber")
                          var Password = prompt("Enter Your Password")
                          var NativePlace = prompt("Enter Your NativePlace")
                          var Address = prompt("Enter Your Address")
                          var user = new Object();
                          user.name=name;
                          user.Email=Email;
                          user.Age=Age;
                          user.phoneNumber;
                          user.Password=Password;
                          user.NativePlace=NativePlace;
                          user.Address=Address;
                          records.push(user);
                          console.log(records);
                         console.log(user);
                         alert("Registration is done You Can Login In My App");
                          break;
                          case '2':
                          console.log("Login Form Is Selected");
                          var Email = prompt("Enter Your Email");
                          var Password =prompt("Enter Your Password");
                          for(index in records){
                              console.log(records[index]);
                              if(records[index].Email === Email && records[index].Password
                            === Password){
                                alert("Login Success");
                            } 
                            else{
                                alert("Login is Failed");
                            }
                          }
                          break;
                        //   case '3': case 'Exit':
                        //   console.log("Exit Registration Form");
                        //   var option = prompt("Enter Your Option");
                        //   if(options === '1' || options === 'Registration' || options === '2' || options === 'Login'){
                        //   }
                        //     else{
                        //         console.log("OtherWise Not Valid");
                        //         break
                        //     }
                        //     break;
                          default:
                          console.log("Invalid Option")
                      }
                      var options = prompt(`Select Any One Option
                      1.Registration
                      2.Login
                      3.Exit`);
                      if(options == '3' || options == 'exit'){
                          break;
                      }
                    }
                    