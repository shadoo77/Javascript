function result (a, b, c) {
    let res = a + b + c;
    return res;
}
console.log('The result of sum 5, 10, 6 is : ' + result(5, 10, 6));
console.log('*******************************************************');
// *********************************************************************
function colorCar (ownColor) {
    console.log(`a ${ownColor} car`);
}
colorCar('red');
console.log('*******************************************************');
// *********************************************************************
const myCar = {
    name: 'Peugoet',
    bouwJaar: 2003,
    color: 'black'
};
function displayMyObject(obj) {
    console.log('My object elements are : ');
    let arr1 = Object.keys(obj);
    let arr2 = Object.values(obj);
    for (let i = 0; i < arr1.length; i++) {
            console.log(arr1[i] + " : " + arr2[i]);
    }
}
displayMyObject(myCar);
console.log('*******************************************************');
// *********************************************************************
function vehicleType(color, code) {
    if (code == 1) {
        console.log(`a ${color} car`);
    } else if (code == 2) {
        console.log(`a ${color} motorbike`);
    } else {
        console.log('Check your entrie code and rewrite it pls!');
    }
}
vehicleType('blue', 2);
console.log('*******************************************************');
// *********************************************************************

(3 !== 3) ? console.log("yes") : console.log("no");
console.log('*******************************************************');
// *********************************************************************



function vehicle(color, code, age) {
    if (code == 1) {
        (age >= 5) ? console.log(`a ${color} used car`) : console.log(`a ${color} new car`);
    } else if (code == 2) {
        (age >= 5) ? console.log(`a ${color} used motorbike`) : console.log(`a ${color} new motorbike`);
    } else {
        console.log('Check your entrie code and rewrite it pls!');
    }
}
vehicle('orange', 1, 5);
console.log('*******************************************************');
// *********************************************************************



function vehicle2(color, code, age) {
    let vehicleKind = ["motorbike", "caravan", "car"];
    vehicleKind.splice(2, 0, "bike");
    console.log("The third element of my list is : " + vehicleKind[2]);
    switch(code) {
        case 1 :
        (age >= 5) ? console.log(`a ${color} used ${vehicleKind[0]}`) : console.log(`a ${color} new ${vehicleKind[0]}`);
        break;

        case 2 :
        (age >= 5) ? console.log(`a ${color} used ${vehicleKind[1]}`) : console.log(`a ${color} new ${vehicleKind[1]}`);
        break;

        case 3 :
        (age >= 5) ? console.log(`a ${color} used ${vehicleKind[2]}`) : console.log(`a ${color} new ${vehicleKind[2]}`);
        break;

        case 4 :
        (age >= 5) ? console.log(`a ${color} used ${vehicleKind[3]}`) : console.log(`a ${color} new ${vehicleKind[3]}`);
        break;

        default:
        console.log('Check your entrie code and rewrite it pls!');
        break;
    }
    vehicleKind.splice(4, 0, "tttt");
    vehicleKind.splice(5, 0, "rtertr");
    let adMsg = "Amazing Joe's Garage, we service ";
    let advertisement = '';
    for (let i = 0; i < vehicleKind.length; i++) {
        if (i == vehicleKind.length - 1) {
            advertisement += ' and ' + vehicleKind[i];
        } else {
            advertisement += ', ' + vehicleKind[i];
        }
    }
    advertisement = advertisement.trim();
    advertisement = advertisement.replace(", ", "");
    console.log(adMsg + advertisement);
}
vehicle2('orange', 3, 4);
console.log('*******************************************************');
// *********************************************************************

let emptyObj = {};
let myTeachers = {
    math: 'John',
    cimecal: 'Arby',
    science: 'Michle',
    sport: 'Ahmad'
};
myTeachers.language = 'English';

// *********************************************************************

let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(z);
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z === y);
console.log('*******************************************************');
// ******************************************************

let o1 = { foo: 'bar' };
let o2 = { foo: 'baeeeer' };
let o3 = o2;
// let o3 is a reference variable and the o2 is object so if there are what changing in o2 object it changes o3 
console.log(o3.foo === o2.foo); // true expected
// but if there is a changing on o1 it doesn't matter
console.log(o3.foo === o1.foo); // false expected
let bar = 42;
console.log(typeof typeof bar); // string