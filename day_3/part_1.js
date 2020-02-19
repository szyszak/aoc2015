const input = require('./input');

const visited = [];

const currPos = {
  x: 0,
  y: 0,
};

for (const char of input) {
  const currHouse = visited.find(elem => elem.x === currPos.x && elem.y === currPos.y);

  if (currHouse) {
    currHouse.timesVisited += 1;
  } else {
    visited.push({
      x: currPos.x,
      y: currPos.y,
      timesVisited: 1,
    });
  }

  if (char === '^') {
    currPos.y++;
  } else if (char === '>') {
    currPos.x++;
  } else if (char === 'v') {
    currPos.y--;
  } else if (char === '<') {
    currPos.x--;
  }
}

console.log(visited.length);
