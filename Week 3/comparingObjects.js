let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);

o2.foo = 'second bar';
console.log(o3);
console.log('By changing o2, o3 will change too ');

o1.foo = 'first bar';
console.log(o3);
console.log('By changing o1, o3 will not change ');

console.log('the order of o3 = o2 or o2 = o3 will be matter ');