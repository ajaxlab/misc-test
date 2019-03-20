let hrstart;
let hrend;
let val;

const arr = [
  {path: '/nm/a/nm/b'},
  {path: '/nm/b'},
  {path: '/nm/a'},
  {path: '/nm/a/nm/c'},
  {path: '/'},
  {path: '/nm/a/nm/b/nm/c'}
];

hrstart = process.hrtime();

arr.sort((a, b) => {
  return a.path.length - b.path.length;
});

hrend = process.hrtime(hrstart);
console.info('sort: %ds %dms', hrend[0], hrend[1] / 1000000);

console.log(arr);
