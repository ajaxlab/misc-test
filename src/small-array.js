const array = [];

for (let i = 1; i < 100; i++) {
  array.push[i];
}

let hrstart;
let hrend;
let val;

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  array.forEach((v) => {
    val = v;
  });
}
hrend = process.hrtime(hrstart);
console.info('forEach: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  const len = array.length;
  for (let j = 0; j < len; j++) {
    val = array[j];
  }
}
hrend = process.hrtime(hrstart);
console.info('for: %ds %dms', hrend[0], hrend[1] / 1000000);
