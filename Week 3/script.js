//1. Strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log('The total length of myString is: ' + myString.length);
console.log(myString.split(',').join(' '));
//or 
myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.replace(/,/g, ' '));
console.log('\n');

//2. Arrays
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

let MauroFavoriteAnimal = 'turtle';
favoriteAnimals.push(MauroFavoriteAnimal);
console.log(favoriteAnimals);

let JimFavoriteAnimal = 'meerkat';
favoriteAnimals.splice(1, 0, JimFavoriteAnimal);
console.log('I think the new value of the array is: "blowfish", "meerkat", "capricorn", "giraffe", "turtle"');
console.log(favoriteAnimals);

console.log('The array has a length of: ' + favoriteAnimals.length);

let giraffe = favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log('the removed item is: ' + giraffe);

console.log("The item you are looking for (meerkat) is at index: " + favoriteAnimals.indexOf('meerkat'));

//if we want to delete 'meerkat' from the array :
let meerkat = favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'), 1);
console.log(favoriteAnimals);
console.log('the removed item is: ' + meerkat);
console.log('\n');


//More JavaScript
// 1
function calc_sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(calc_sum(5, 6, 7) + '\n');

//2
function colorCar(color) {
    console.log('This is a ' + color + ' car');
}
colorCar('purple');

//3
let students = { ahmed: 10, zak: 15, ema: 18 };
function showStudents(obj) {
    console.log('The names of students: ' + Object.getOwnPropertyNames(obj));
    console.log('Their marks: ' + Object.values(obj));
}
showStudents(students);

//4
function vehicleType(color, code) {
    if (code === 1) { console.log('a ' + color + ' car'); }
    else if (code === 2) { console.log('a ' + color + ' motorbike'); }
    else { console.log('It is not a vehicle'); }
}
vehicleType("blue", 2);
vehicleType("black", 1);
vehicleType("white", 4);

//5
console.log((3 === 3) ? "true" : "false");

//6
function vehicle(color, code, age) {
    if (code === 1) {
        if (age > 2) { console.log('a ' + color + ' used car'); }
        else { console.log('a ' + color + ' new car'); }
    }

    else if (code === 2) {
        if (age > 2) { console.log('a ' + color + ' used motorbike'); }
        else { console.log('a ' + color + ' new motorbike'); }
    }

    else { console.log('It is not a vehicle'); }
}
vehicle("blue", 2, 5);
vehicle("red", 1, 1);

//7
let vehiclesList = ["motorbike", "caravan", "bike", "bus", "car"];

//8
console.log(vehiclesList[2]);


//9
function vehicle2(color, code, age) {
    if (age <= 2) { console.log('a ' + color + ' new ' + vehiclesList[code]); }
    else { console.log('a ' + color + ' used ' + vehiclesList[code]); }
}
vehicle2("green", 2, 5);
vehicle2("silver", 1, 1);
vehicle2("blue", 0, 2);

//10
function editAdvertisement() {
    let advertisement = "Amazing Joe's Garage, we service ";

    let vList = [], vLast = vehiclesList[vehiclesList.length - 1];

    for (let i = 0; i < vehiclesList.length - 2; i++) {
        if (vehiclesList[i].charAt(vehiclesList[i].length - 1) === 's') { vList.push(vehiclesList[i] + 'es, '); }
        else { vList.push(vehiclesList[i] + 's, '); }
    }
    if (vehiclesList[vehiclesList.length - 2].charAt(vehiclesList[vehiclesList.length - 2].length - 1) === 's') { vList.push(vehiclesList[vehiclesList.length - 2] + 'es '); }
    else { vList.push(vehiclesList[vehiclesList.length - 2] + 's '); }

    if (vLast.charAt(vLast.length - 1) === 's') { vLast + 'es'; }
    else { vLast + 's'; }

    advertisement += vList.join('') + 'and ' + vLast + '.';
    return advertisement;
}
console.log(editAdvertisement());

//11
// Yes i can 
vehiclesList.push('scooter');
vehiclesList.push('boat');
console.log(editAdvertisement());

//12
let object = {};
console.log(object);


//13
let teachers = {
    Phillip: [],
    Unmesh: [],
    Mauro: [],
    Hardet: [],
    Keven: [],
    Samir: []
};

//14
teachers = {
    Phillip: ['HTML', 'Css'],
    Unmesh: ['Git'],
    Mauro: ['Git', 'JavaScript'],
    Hardet: ['HTML', 'Css', 'Git', 'JavaScript'],
    Keven: ['HTML', 'Css', 'Git', 'JavaScript'],
    Samir: ['JavaScript', 'Git']
};

console.log('The names of teachers: ' + Object.getOwnPropertyNames(teachers));


//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

let flag = false;
function checkArrays(arr1, arr2) {
    if (arr1.length === arr2.length) flag = true;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) flag = true;
    }

    for (let j = 0; j < arr1.length; j++) {
        if (typeof arr1[j] === typeof arr2[j]) flag = true;
    }

    if (flag == true) return true;
    else return false;
}

console.log("x==y " + checkArrays(x, y));
console.log("y==z " + checkArrays(y, z));
console.log("z==x " + checkArrays(z, x));


//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);

o2.foo = 'second bar';
console.log(o3);
console.log('By changing o2, o3 will change too ');

o1.foo = 'first bar';
console.log(o3);
console.log('By changing o1, o3 will not change ');

console.log('the order of o3 = o2 or o2 = o3 will be matter ');

//17
//it will return string at all :3
let bar = 42;
console.log(typeof typeof bar);

let str = 'Hello';
console.log(typeof typeof str);

let bool = true;
console.log(typeof typeof bool);