let hrstart;
let hrend;
let val;

console.info('--------------');

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  val = null;
}
hrend = process.hrtime(hrstart);
console.info('null: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  val = void 0;
}
hrend = process.hrtime(hrstart);
console.info('void 0: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  val = undefined;
}
hrend = process.hrtime(hrstart);
console.info('undefined: %ds %dms', hrend[0], hrend[1] / 1000000);
