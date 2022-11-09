exports.stringLength = (string) => {
 if(string.length < 1 || string.length >10){
  return 'Error';
 } else {
  return string.length;
 }
}

exports.reverseString = (string) => {
 let reversed = string.split("").reverse().join("")
 return reversed ;
}

class Calculator{
 c
 
add = (a,b) => {
  return (a + b)
 };
 static substract(a,b){
  return (a + b)
 };
 static multiply(a,b){
  return (a + b)
 };
 static divide(a,b){
  return (a + b)
 }
 
 }

 exports = Calculator;