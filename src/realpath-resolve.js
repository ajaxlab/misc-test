const fs = require('fs');
const path = require('path');

let hrstart;
let hrend;
const length = 10000;

let resolved;
hrstart = process.hrtime();

for (let i = 0; i < length; i++) {
  resolved = path.resolve('./');
}

hrend = process.hrtime(hrstart);
console.info(resolved);
console.info('path.resolve: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();

let count = 0;

for (let i = 0; i < length; i++) {
  fs.realpath('./', (e, realpath) => {
    count++;
    if (count === length) {
      hrend = process.hrtime(hrstart);
      console.info('----------------------------------------------------');
      console.info(realpath);
      console.info('realpath: %ds %dms', hrend[0], hrend[1] / 1000000);
    }
  });
}

console.info('----------------------------------------------------');

let v;
const strings = [];

for (let i = 0; i < length; i++) {
  strings[i] = 's_' + i;
}

hrstart = process.hrtime();

for (let i = 0; i < length; i++) {
  if (strings[i].endsWith('1') || strings[i].endsWith('2')) {
    v = strings[i];
  }
}

hrend = process.hrtime(hrstart);
console.info('endsWith: %ds %dms', hrend[0], hrend[1] / 1000000);

console.info('----------------------------------------------------');

const reg = /\\/g;
const regSep = /\/+/g;
const testString = 'f:/a//b\\c\\\\d\\/e/\\f';

hrstart = process.hrtime();

for (let i = 0; i < length; i++) {
  v = testString.replace(reg, '/').replace(regSep, '/');
}

hrend = process.hrtime(hrstart);
console.info(v);
console.info('replace: %ds %dms', hrend[0], hrend[1] / 1000000);
