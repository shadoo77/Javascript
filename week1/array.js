var animals = ['Tiger', 'Lion', 'Dog', 'Bear', 'Parrot', 'Fish'];
var res = animals.length;
console.log("This is an arry with a list of some animals :");
var result = "";
for (var i = 0; i < res; i++ ) {
    result += animals[i] + "\n";
}
console.log(result);
/* ******************************** */
console.log("Now we gonna add an extra animal :");
animals.push("baby pig");
result = "";
res = animals.length;
for (var y = 0; y < res; y++ ) {
    result += animals[y] + "\n";
}
console.log(result);