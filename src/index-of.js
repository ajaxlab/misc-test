const array = [];
const object = {};

let hrstart;
let hrend;

let room;

hrstart = process.hrtime();
for (let i = 0; i < 20; i++) {
  array.push(i);
  object[i] = i;
}

hrstart = process.hrtime();
for (let j = 0; j < 2000; j++) {
  for (let i = 0; i < 20; i++) {
    room = array[i];
  }
}
hrend = process.hrtime(hrstart);
console.info('Array: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let j = 0; j < 2000; j++) {
  for (let i = 0; i < 20; i++) {
    room = array.indexOf(i);
  }
}
hrend = process.hrtime(hrstart);
console.info('Array indexOf: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let j = 0; j < 2000; j++) {
  for (let i = 0; i < 20; i++) {
    room = object[i];
  }
}
hrend = process.hrtime(hrstart);
console.info('Object: %ds %dms', hrend[0], hrend[1] / 1000000);
