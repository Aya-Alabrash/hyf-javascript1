//1. Strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log('The total length of myString is: ' + myString.length);
console.log(myString.split(',').join(' '));
//or 
myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.replace(/,/g, ' '));
console.log('\n');
