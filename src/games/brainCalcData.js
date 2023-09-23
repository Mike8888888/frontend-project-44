import _ from 'lodash';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

function getRaundData() {
  const firstNumber = _.random(20);
  const secondNumber = _.random(20);
  const summVariant = firstNumber + secondNumber;
  const multVariant = firstNumber * secondNumber;
  const subtractVariant = firstNumber - secondNumber;
  const expressionsArray = [summVariant, multVariant, subtractVariant];
  const randomNumberForExpressionType = _.random(0, 2);
  const correctAnswer = expressionsArray.at(randomNumberForExpressionType);

  let operatorType;
  if (randomNumberForExpressionType === 0) {
    operatorType = '+';
  } else if (randomNumberForExpressionType === 1) {
    operatorType = '*';
  } else {
    operatorType = '-';
  }

  const question = `${firstNumber} ${operatorType} ${secondNumber}`;
  const result = [question, correctAnswer];
  return result;
}

export default () => {
  runGame(description, getRaundData);
};
