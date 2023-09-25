import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

function isEven(number) {
  return number % 2 === 0;
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRaundData() {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const result = [question, correctAnswer];

  return result;
}

export default () => {
  runGame(description, getRaundData);
};
