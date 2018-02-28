
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
