
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
