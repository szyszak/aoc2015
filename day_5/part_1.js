const INPUT = require('./input');

const arr = INPUT.split('\n');

let counter = 0;

// i suck at regex and couldn't figure out one to test the first case so i used match instead
for (const str of arr) {
  if (
    str.match(/[aeiou]/g)
    && str.match(/[aeiou]/g).length > 2
    && /(.)\1+/g.test(str)
    && !/ab|cd|pq|xy/.test(str)
  ) {
    counter++;
  }
}

console.log(counter);
