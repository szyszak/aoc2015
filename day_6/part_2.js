const INPUT = require('./input');

const arr = INPUT.split('\n');

let count = 0;

const generateGrid = (size, value) => Array.from({ length: size }, () => Array.from({ length: size }).fill(value));

const grid = generateGrid(1000, 0);

for (const str of arr) {
  const splitStr = str.split(' ');
  const [startX, startY] = splitStr[splitStr.length - 3].split(',');
  const [endX, endY] = splitStr[splitStr.length - 1].split(',');

  for (let i = +startY; i <= +endY; i++) {
    for (let j = +startX; j <= +endX; j++) {
      if (str.startsWith('turn on')) {
        grid[i][j] += 1;
      } else if (str.startsWith('turn off')) {
        if (grid[i][j] > 0) grid[i][j] -= 1;
      } else {
        grid[i][j] += 2;
      }
    }
  }
}

for (const arr of grid) {
  for (const val of arr) {
    count += val;
  }
}

console.log(count);
