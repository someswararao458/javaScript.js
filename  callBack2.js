var imagePath = '../image/cricketors/rahul.png';
var isImage = true;
var showImagePath = function(){
    return imagePath;
}
var clickImage = (img,callback)=>{
if(img){
    return callback();
}
else{
    return "NO Image Found"
}
}
 var imagePath = clickImage(isImage,showImagePath);
 console.log(imagePath);
 