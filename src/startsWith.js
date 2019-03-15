let hrstart;
let hrend;

let val;
const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push('' + i);
}

console.info('--------------');

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  arr.forEach((v, i) => {
    val = v.startsWith('1');
  });
}
hrend = process.hrtime(hrstart);
console.info('startsWith: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  arr.forEach((v, i) => {
    val = v[0] === '1';
  });
}
hrend = process.hrtime(hrstart);
console.info('[0]: %ds %dms', hrend[0], hrend[1] / 1000000);
