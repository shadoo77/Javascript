let myString = "this is a test";
console.log(myString);
console.log("The length of the string is : " + myString.length);
let a = 'ggg';
let b = 7;
let f1 = typeof a;
let f2 = typeof b;
console.log(f1);
if ( f1 == f2 ) {
    console.log('same');
} else {
    console.log('not same');
}
/* ********************************* */
let var1 = 125;
console.log("Variable 1's value is : " + var1);
let var2 = "Shadi";
console.log("Variable 2's value is : " + var2);
let var3 = true;
console.log("Variable 3's value is : " + var3);
let var4 = { firstName: 'Ahmad', lastName: 'Lana'};
console.log("Variable 4's value is object : first name :" + var4.firstName + ", and last name : " + var4.lastName);
let var5 = 55;
console.log("Variable 5's value is : " + var5);
// explaining ********************************
console.log("Type of variable 1 is number \nType of variable 2 is string \nType of variable 3 is boolean \nType of variable 4 is object");
// the actual type of your variable
console.log("The actual type of variable 1 is :" + typeof var1);
console.log("The actual type of variable 2 is :" + typeof var2);
console.log("The actual type of variable 3 is :" + typeof var3);
console.log("The actual type of variable 4 is :" + typeof var4);
console.log("The actual type of variable 5 is :" + typeof var5);
/* *************************** */
var temp = [var1, var2, var3, var4, var5];
let tempB = [];
for (var i = 0; i < temp.length; i++) {
    tempB[i] = temp[i];
}

for (var j = 0; j < 5; j++) {
    switch (j) {
        case 0 :
        iuu = "variable 1";
        break;
        case 1 :
        iuu = "variable 2";
        break;
        case 2 :
        iuu = "variable 3";
        break;
        case 3 :
        iuu = "variable 4";
        break;
        case 4 :
        iuu = "variable 5";
        break;
    }
    for (var k = 0; k < 5; k++) {
        let iu;
        switch (k) {
            case 0 :
            iu = "variable 1";
            break;
            case 1 :
            iu = "variable 2";
            break;
            case 2 :
            iu = "variable 3";
            break;
            case 3 :
            iu = "variable 4";
            break;
            case 4 :
            iu = "variable 5";
            break;
        }
        if (temp[j] === tempB[k]) {
            continue;
        }
        if (typeof temp[j] != typeof tempB[k]) {
            console.log("The type of " + iuu + " is not same type of " + iu);
        } else {
            console.log("The type of " + iuu + " has a same type of " + iu);
        }
    }
}