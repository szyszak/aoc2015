const input = require('./input');

const arr = input.split('\n').map(str => str.split('x').sort((a, b) => a - b));

let totalLength = 0;

for (const [l, w, h] of arr) {
  const length = 2 * +l + 2 * +w + l * w * h;

  totalLength += length;
}

console.log(totalLength);
