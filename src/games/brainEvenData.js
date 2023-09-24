import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import isEven from '../isEven.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRaundData() {
  const randomNumber = getRandomNumber(0, 10);
  const correctAnswer = isEven(randomNumber);
  const question = randomNumber;
  const result = [question, correctAnswer];

  return result;
}

export default () => {
  runGame(description, getRaundData);
};
