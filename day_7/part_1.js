const INPUT = require('./input');

const arr = INPUT.split('\n');

const wires = {};

const checkRange = num => {
  const MAX = 65536;
  return ((num % MAX) + MAX) % MAX;
};

const parseCommand = str => {
  const stringArr = str.split(' ');
  let result = [];

  if (stringArr[1] === 'AND') {
    result[0] = stringArr[4];
    if (typeof stringArr[0] === 'number') {
      result[1] = stringArr[0] & wires[stringArr[2]];
    } else {
      result[1] = wires[stringArr[0]] & wires[stringArr[2]];
    }
  } else if (stringArr[1] === 'OR') {
    result[0] = stringArr[4];
    result[1] = wires[stringArr[0]] | wires[stringArr[2]];
  } else if (stringArr[1] === 'RSHIFT') {
    result[0] = stringArr[4];
    result[1] = wires[stringArr[0]] >> wires[stringArr[2]];
  } else if (stringArr[1] === 'LSHIFT') {
    result[0] = stringArr[4];
    result[1] = wires[stringArr[0]] << wires[stringArr[2]];
  } else if (stringArr[1] === '->') {
    result = [wires[stringArr[2]], wires[stringArr[0]]];
  } else if (stringArr[0] === 'NOT') {
    result[0] = wires[stringArr[3]];
    result[1] = ~checkRange(wires[stringArr[1]]);
  }
  console.log(result);
  return result;
};

for (const str of arr) {
  const [key, value] = parseCommand(str);

  wires[key] = value;
}

console.log(wires);
