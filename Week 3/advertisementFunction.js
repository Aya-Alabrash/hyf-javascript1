
//10
let vehiclesList = ["motorbike", "caravan", "bike", "bus", "car"];
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
