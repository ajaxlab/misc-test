let hrstart;
let hrend;

let val;
const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}

console.info('--------------');

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  arr.forEach((v, i) => {
    val = v;
  });
}
hrend = process.hrtime(hrstart);
console.info(val, 'forEach: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  const len = arr.length;
  for (let j = 0; j < len; j++) {
    val = arr[j];
  }
}
hrend = process.hrtime(hrstart);
console.info(val, 'for: %ds %dms', hrend[0], hrend[1] / 1000000);
