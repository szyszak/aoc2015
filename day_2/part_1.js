const input = require('./input');

const arr = input.split('\n').map(str => str.split('x').sort((a, b) => a - b));

let totalArea = 0;

for (const [l, w, h] of arr) {
  let area = 2 * +l * +w;
  area += 2 * +w * +h;
  area += 2 * +h * +l;
  area += +l * +w; // extra papes - smallest side

  totalArea += area;
}

console.log(totalArea);
