const input = require('./input');

const visited = [];

const santaPos = {
  x: 0,
  y: 0,
};

const roboPos = {
  x: 0,
  y: 0,
};

const travel = (position, char) => {
  const currHouse = visited.find(elem => elem.x === position.x && elem.y === position.y);

  if (currHouse) {
    currHouse.timesVisited += 1;
  } else {
    visited.push({
      x: position.x,
      y: position.y,
      timesVisited: 1,
    });
  }

  if (char === '^') {
    position.y++;
  } else if (char === '>') {
    position.x++;
  } else if (char === 'v') {
    position.y--;
  } else if (char === '<') {
    position.x--;
  }
};

for (let i = 0; i < input.length; i++) {
  i % 2 === 0 ? travel(santaPos, input[i]) : travel(roboPos, input[i]);
}

console.log(visited.length);
