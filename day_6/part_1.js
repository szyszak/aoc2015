const INPUT = require('./input');

const arr = INPUT.split('\n');

let count = 0;

const generateGrid = (size, value) => Array.from({ length: size }, () => Array.from({ length: size }).fill(value));

const grid = generateGrid(1000, false);

for (const str of arr) {
  const splitStr = str.split(' ');
  const [startX, startY] = splitStr[splitStr.length - 3].split(',');
  const [endX, endY] = splitStr[splitStr.length - 1].split(',');

  for (let i = +startY; i <= +endY; i++) {
    for (let j = +startX; j <= +endX; j++) {
      if (str.startsWith('turn on')) {
        grid[i][j] = true;
      } else if (str.startsWith('turn off')) {
        grid[i][j] = false;
      } else {
        grid[i][j] = !grid[i][j];
      }
    }
  }
}

for (const arr of grid) {
  for (const val of arr) {
    if (val === true) count++;
  }
}

console.log(count);
