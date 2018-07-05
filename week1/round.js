var z = 7.25;
console.log("Print a value of my variable : 7.25");
console.log(z);
var a = Math.round(z);
console.log("now get a round value of my variable to the nearest integer");
console.log(a);
var res;
if (a > z) {
    res = a;
    console.log("The biggest value is variable a : " + res);
} else {
    res = z;
    console.log("The biggest value is variable z : " + res);
}