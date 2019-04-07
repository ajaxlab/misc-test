const reNum = /^[0-9]*$/;
let hrstart;
let hrend;

function isNum(str) {
  const length = str.length;
  for (let i = 0; i < length; i++) {
    const code = str.charCodeAt(i);
    if (code < 48 || code > 57) {
      return false;
    }
  }
  return true;
}

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  reNum.test('123');
  reNum.test('123a');
}
hrend = process.hrtime(hrstart);
console.info('Reg Exp: %ds %dms', hrend[0], hrend[1] / 1000000);

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  isNum('123');
  isNum('123a');
}
hrend = process.hrtime(hrstart);
console.info('isNum: %ds %dms', hrend[0], hrend[1] / 1000000);
