let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log('My text is : ' + myString);
console.log(`My text length is : ${myString.length}`);
// Now replace a comma of the string wit a space
let newMyString = myString.replace(/,/g, " ");
console.log(`The improved version of my text is : ${newMyString}`);