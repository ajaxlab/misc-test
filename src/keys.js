let hrstart;
let hrend;
let val;
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
};

console.info('--------------');

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  val = Object.keys(obj);
}
hrend = process.hrtime(hrstart);
console.info('Object.keys: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  val = Object.getOwnPropertyNames(obj);
}
hrend = process.hrtime(hrstart);
console.info('Object.getOwnPropertyNames: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  for (const k in obj) {
  }
}
hrend = process.hrtime(hrstart);
console.info('for in: %ds %dms', hrend[0], hrend[1] / 1000000);
