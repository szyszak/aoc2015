const crypto = require('crypto');

const input = 'iwrupvqb';

const createMD5 = str => {
  const hash = crypto
    .createHash('md5')
    .update(str)
    .digest('hex');

  return hash;
};

let counter = 0;

while (!createMD5(`${input}${counter}`).startsWith('00000')) counter++;

console.log(counter);
