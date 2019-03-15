const fs = require('fs');

const hrstart = process.hrtime();

fs.readdir('./node_modules/', (e, dirs) => {
  console.log(dirs.length);
  let count = 0;
  const length = dirs.length;
  dirs.forEach((dir) => {
    const pkgDir = './node_modules/' + dir;
    fs.stat(pkgDir, (stat) => {
      if (!dir.startsWith('.') && !dir.startsWith('@')) {
        fs.readFile(pkgDir + '/package.json', 'utf8', () => {
          count++;
          if (count === length) {
            const hrend = process.hrtime(hrstart);
            console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
          }
        });
      } else {
        count++;
        if (count === length) {
          const hrend = process.hrtime(hrstart);
          console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
        }
      }
    });
  });
});
