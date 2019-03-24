/*
https://stackoverflow.com/questions/32478698/what-is-the-different-between-stat-fstat-and-lstat-functions-in-node-js

stat follows symlinks. When given a path that is a symlink, it returns the stat of the target of the symlink.
lstat doesn't follow symlinks. When given a path that is a symlink it returns the stat of the symlink and not its target.
fstat takes a file descriptor rather than a path.
*/

const fs = require('fs');

fs.stat('./real', (e, stat) => {
  if (e) {
    console.info(e);
  }
  // console.info('/real stat', stat);
  console.info('/real stat.isFile()', stat.isFile());
  console.info('/real stat.isSymbolicLink()', stat.isSymbolicLink());
  console.info('/real stat.isDirectory()', stat.isDirectory());
});

fs.lstat('./real', (e, lstat) => {
  if (e) {
    console.info(e);
  }
  // console.info('/real lstat', lstat);
  console.info('/real lstat.isFile()', lstat.isFile());
  console.info('/real lstat.isSymbolicLink()', lstat.isSymbolicLink());
  console.info('/real lstat.isDirectory()', lstat.isDirectory());
});

fs.stat('./sym', (e, stat) => {
  if (e) {
    console.info(e);
  }
  // console.info('/sym stats', stat);
  console.info('/sym stats.isFile()', stat.isFile());
  console.info('/sym stats.isSymbolicLink()', stat.isSymbolicLink());
  console.info('/sym stats.isDirectory()', stat.isDirectory());
});


fs.lstat('./sym', (e, lstat) => {
  if (e) {
    console.info(e);
  }
  // console.info('/sym lstat', lstat);
  console.info('/sym lstat.isFile()', lstat.isFile());
  console.info('/sym lstat.isSymbolicLink()', lstat.isSymbolicLink());
  console.info('/sym lstat.isDirectory()', lstat.isDirectory());
});
