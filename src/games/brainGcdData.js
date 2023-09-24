import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

function getGcdAnswer(number1, number2) {
  let firstNumber = number1;
  let secondNumber = number2;
  let correctAnswer;
  if (firstNumber === secondNumber) {
    correctAnswer = firstNumber;
  } else {
    while (firstNumber !== 0 && secondNumber !== 0) {
      if (firstNumber > secondNumber) {
        firstNumber %= secondNumber;
      } else {
        secondNumber %= firstNumber;
      }
      correctAnswer = firstNumber + secondNumber;
    }
  }
  return correctAnswer;
}

function getRaundData() {
  const randomNumber1 = getRandomNumber(1, 14);
  const randomNumber2 = getRandomNumber(1, 20);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGcdAnswer(randomNumber1, randomNumber2);
  const result = [question, correctAnswer];

  return result;
}

export default () => {
  runGame(description, getRaundData);
};
