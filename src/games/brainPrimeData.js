import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
}

function getRaundData() {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber;
  const correctAnswer = isPrime(randomNumber);
  const result = [question, correctAnswer];
  return result;
}

export default () => {
  runGame(description, getRaundData);
};
