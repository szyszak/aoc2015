const input = require('./input');

const findFloor = (input) => {
  let currFloor = 0;

  for (const char of input) {
    char === '(' ? currFloor++ : currFloor--;
  }

  return currFloor;
};

console.log(findFloor(input));
