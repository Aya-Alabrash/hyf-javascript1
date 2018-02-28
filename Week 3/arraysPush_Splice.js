
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
