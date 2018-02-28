//9
function vehicle2(color, code, age) {
    if (age <= 2) { console.log('a ' + color + ' new ' + vehiclesList[code]); }
    else { console.log('a ' + color + ' used ' + vehiclesList[code]); }
}
vehicle2("green", 2, 5);
vehicle2("silver", 1, 1);
vehicle2("blue", 0, 2);
