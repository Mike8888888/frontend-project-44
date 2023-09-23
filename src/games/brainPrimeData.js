import _ from 'lodash';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getPrimeArray() {
  const primeArray = [];

  for (let i = 2; i < 100; i += 1) {
    for (let j = 2; j <= i; j += 1) {
      if (i === j) {
        primeArray.push(i);
      } else if (i % j === 0) {
        break;
      }
    }
  }
  return primeArray;
}

function getRaundData() {
  const primeArray = getPrimeArray();
  const randomNumber = _.random(1, 100);
  const question = randomNumber;
  const correctAnswer = primeArray.find((Element) => Element % randomNumber === 0) ? 'yes' : 'no';
  const result = [question, correctAnswer];
  return result;
}

export default () => {
  runGame(description, getRaundData);
};
