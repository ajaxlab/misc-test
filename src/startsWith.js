let hrstart;
let hrend;

let count = 0;
let val;
const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push('' + i);
}

console.info('--------------');

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  arr.forEach((v, i) => {
    if (v.startsWith('9999')) {
      count++;
    }
  });
}
hrend = process.hrtime(hrstart);
console.info('startsWith (%d): %ds %dms', count, hrend[0], hrend[1] / 1000000);

count = 0;
hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  arr.forEach((v, i) => {
    if (v.substring(0, 5) === '9999') {
      count++;
    }
  });
}
hrend = process.hrtime(hrstart);
console.info('substring (%d): %ds %dms', count, hrend[0], hrend[1] / 1000000);
