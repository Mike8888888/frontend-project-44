import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import getCalculationResult from '../getCalculationResult.js';

const description = 'What is the result of the expression?';

function getRaundData() {
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const operatorArray = ['+', '-', '*'];
  const randomOperator = operatorArray.at(getRandomNumber(0, 2));
  const correctAnswer = getCalculationResult(firstNumber, secondNumber, randomOperator);
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const result = [question, correctAnswer];

  return result;
}

export default () => {
  runGame(description, getRaundData);
};
