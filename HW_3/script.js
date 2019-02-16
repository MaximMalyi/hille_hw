// 1
var string = prompt("Введіть текст");
 
 if (string.length < 10 ) {
  for (var i = 0; i < string.length; i++) {
   console.log(string[i]); 
  }
 }else{
  console.log(string.substr(7, 1000)); 
 }

 //2
var string2 = prompt("Введіть текст");
 toUpper();
  function toUpper(){
   console.log(string2[0].toUpperCase() + string2.substr(1, 1000));
  };