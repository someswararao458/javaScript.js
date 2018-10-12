<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        console.log("This is 1st Statement");
        try{
        console.log("This is 2st Statement");
    }catch(error){
        console.log("This is 3st Statement");
        console.log("This is 4st Statement");
        console.log("This is 5st Statement");
        //console.log(errors in code);
        console.log("error name",error.name);
        console.log(error.message);
        console.log(error.stack);
       // console.log(error);

        
    }finally{
        console.log('Finally is always Execuated block');
    }
    console.log("This is 4th Statement");
    console.log("This is 5th Statement");
        </script>
</body>
</html>