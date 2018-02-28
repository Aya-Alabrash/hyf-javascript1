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
