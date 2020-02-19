const INPUT = require('./input');

const arr = INPUT.split('\n');

let counter = 0;

for (const str of arr) {
  if (/([a-z][a-z]).*\1/.test(str) && /([a-z])[a-z]\1/.test(str)) counter++;
}

console.log(counter);
