//4
function vehicleType(color, code) {
    if (code === 1) { console.log('a ' + color + ' car'); }
    else if (code === 2) { console.log('a ' + color + ' motorbike'); }
    else { console.log('It is not a vehicle'); }
}
vehicleType("blue", 2);
vehicleType("black", 1);
vehicleType("white", 4);