const fs = require('fs');

const hrstart = process.hrtime();

const dirs = fs.readdirSync('./node_modules/');
dirs.forEach((dir) => {
  const pkgDir = './node_modules/' + dir;
  fs.statSync(pkgDir);
  if (!dir.startsWith('.') && !dir.startsWith('@')) {
    fs.readFileSync(pkgDir + '/package.json');
  }
});

console.log(dirs.length);

const hrend = process.hrtime(hrstart);
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
