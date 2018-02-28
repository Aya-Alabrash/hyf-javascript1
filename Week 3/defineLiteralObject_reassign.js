
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
