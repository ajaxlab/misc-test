let hrstart;
let hrend;
let val;

const obj = {
  a: true,
  b: true,
  c: true,
  d: true,
  e: true,
  f: true,
  g: true,
  h: true,
  i: true,
  j: true,
  k: true,
  l: true,
  m: true,
  n: true,
  o: true,
  p: true,
  q: true,
  r: true,
  s: true,
  t: true,
  u: true,
  v: true,
  w: true,
  x: true,
  y: true,
  z: true
};

hrstart = process.hrtime();
for (let i = 0; i < 10000; i++) {
  Object.keys(obj).length;
}
hrend = process.hrtime(hrstart);
console.info('Object.keys: %ds %dms', hrend[0], hrend[1] / 1000000);
