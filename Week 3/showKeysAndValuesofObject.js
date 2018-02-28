//3
let students = { ahmed: 10, zak: 15, ema: 18 };
function showStudents(obj) {
    console.log('The names of students: ' + Object.getOwnPropertyNames(obj));
    console.log('Their marks: ' + Object.values(obj));
}
showStudents(students);