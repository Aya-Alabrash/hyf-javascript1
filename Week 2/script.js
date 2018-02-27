// 1
console.log("Hello World! \n");
console.log("Hallo Wereld!\n");
console.log("Selam Dünya! \n");
console.log("Bonjour le monde \n");

//2
console.log('I\'m awesome');
//or
console.log("I'm awesome");
console.log("\n");

//3
let x;
console.log("The value of my variable x will be: Undefined \nbecause i didn\'t initialize it yet");
console.log("The value of variable x is:" + x)

x = 101;
console.log("The value of my variable x will be: 101 \n")
console.log("The value of variable x is:" + x);
console.log("\n");

//4
let y;
y = "I love cats";
console.log("I think The value of my variable y will be: a String \n");
console.log("The value of variable y is: " + y);

y = "I hate snakes";
console.log("The value of my variable y will be: the new string \n");
console.log("The value of variable y is: " + y);
console.log("\n");

//5
let z = 7.25;
console.log("The value of variable z is: " + z)

let a = Math.round(z);
console.log("The value of variable a is: " + a);

let mx = Math.max(z, a);
console.log("The value of the maximum between a and z is:" + mx);
console.log("\n");

//6
let arr = [];
console.log("The arr will be: [] (empty)");
console.log(arr);

let my_fav_animals = ["cat", "dog", "rabbit", "butterfly"];
console.log(my_fav_animals + "\n");

let Daan_favorite_animal = "baby pig";
my_fav_animals.push(Daan_favorite_animal);
console.log(my_fav_animals + "\n");
console.log("\n");

//7
let myString = "this is a test";
console.log("myString is: " + myString);

let len = myString.length;
console.log("the length of myString is: " + len);
console.log("\n");

//8
let num = 500;
let str = "Hi";
let flt = 55.5;
let bool = true;

console.log("The value of variable num is:" + num);
console.log("The value of variable str is:" + str);
console.log("The value of variable flt is:" + flt);
console.log("The value of variable bool is:" + bool);
console.log("\n");

console.log("variable num is: a Number \t variable str is: a String \t variable flt is: a Number \t variable bool is: a Boolean \n");

console.log("the type of variable num is " + typeof (num));
console.log("the type of variable str is " + typeof (str));
console.log("the type of variable flt is " + typeof (flt));
console.log("the type of variable bool is " + typeof (bool));
console.log("\n");

if (typeof (num) == typeof (str)) {
    console.log("num & str are same types");
} else {
    console.log("num & str are different types");
}

if (typeof (str) == typeof (flt)) {
    console.log("str & flt are same types");
} else {
    console.log("str & flt are different types");
}

if (typeof (flt) == typeof (bool)) {
    console.log("flt & bool are same types");
} else {
    console.log("flt & bool are different types");
}

if (typeof (bool) == typeof (num)) {
    console.log("bool & num are same types");
} else {
    console.log("bool & num are different types");
}

if (typeof (flt) == typeof (num)) {
    console.log("flt & num are same types");
} else {
    console.log("flt & num are different types");
}

console.log("\n");

//9
let x1 = 7;
let x2 = x1 % 3;
console.log("the value of 7 % 3 is: " + x2);

let n1 = 10, f1 = 22.2, s1 = "hello", s2 = "llo";
console.log("the value of n1 % 4 is: " + n1 % 4);
console.log("the value of f1 % 2 is: " + f1 % 2);
console.log("the value of s1 % s2 is: " + s1 % s2);
console.log("\n");

//10
let multiple_types_arr = [5, "aya", 55.5, true];
console.log(multiple_types_arr + "\n");

let c1 = 6 / 0;
let c2 = 10 / 0;
if (isFinite(c1) == isFinite(c2)) {
    console.log("6/0 & 10/0 are equal");
} else {
    console.log("6/0 & 10/0 are different")
}

console.log("\n");

