
const map = new Map();
const set = new Set();
let array = [];
const object = Object.create(null);

let hrstart;
let hrend;

console.info('set --------------');

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  map.set(i, {i});
}
hrend = process.hrtime(hrstart);
console.info('Map: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  set.add({i});
}
hrend = process.hrtime(hrstart);
console.info('Set: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  array.push({i});
}
hrend = process.hrtime(hrstart);
console.info('Array push: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  array[i] = i;
}
hrend = process.hrtime(hrstart);
console.info('Array: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
array = [];
for (let i = 0; i < 10000; i++) {
  array[array.length] = i;
}
hrend = process.hrtime(hrstart);
console.info('array[array.length]: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  object[i] = {i};
}
hrend = process.hrtime(hrstart);
console.info('Object: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  new Date();
}
hrend = process.hrtime(hrstart);
console.info('Date: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  {i}
}
hrend = process.hrtime(hrstart);
console.info('new Object: %ds %dms', hrend[0], hrend[1] / 1000000);

let v;
hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  v = {level: 1}
}
hrend = process.hrtime(hrstart);
console.info('new Object with val: %ds %dms', hrend[0], hrend[1] / 1000000);

console.info('get --------------');

let room;

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  room = map.has(i);
}
hrend = process.hrtime(hrstart);
console.info('Map: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  room = set.has(i);
}
hrend = process.hrtime(hrstart);
console.info('Set: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  room = array[i];
}
hrend = process.hrtime(hrstart);
console.info('Array: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  room = array.indexOf(i);
}
hrend = process.hrtime(hrstart);
console.info('Array indexOf: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  room = object[i];
}
hrend = process.hrtime(hrstart);
console.info('Object: %ds %dms', hrend[0], hrend[1] / 1000000);

console.info('remove --------------');

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  map.delete(i);
}
hrend = process.hrtime(hrstart);
console.info('Map: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  set.delete(i);
}
hrend = process.hrtime(hrstart);
console.info('Set: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  array.splice(array.indexOf(i), 1);
}
hrend = process.hrtime(hrstart);
console.info('Array: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  delete object[i];
}
hrend = process.hrtime(hrstart);
console.info('Object: %ds %dms', hrend[0], hrend[1] / 1000000);
