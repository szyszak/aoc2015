const input = require('./input');

const findFloor = (input) => {
  let currFloor = 0;

  for (let i = 0; i < input.length; i++) {
    input[i] === '(' ? currFloor++ : currFloor--;
    if (currFloor === -1) return i + 1;
  }

  return 'derp';
};

console.log(findFloor(input));
