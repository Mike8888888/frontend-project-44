import _ from 'lodash';

function getRandomExpressionAnswer() {
  const firstNumber = _.random(20);
  const secondNumber = _.random(20);
  const summVariant = firstNumber + secondNumber;
  const multVariant = firstNumber * secondNumber;
  const subtractVariant = firstNumber - secondNumber;
  const expressionsArray = [summVariant, multVariant, subtractVariant];
  const randomNumberForExpressionType = _.random(0, 2);
  const randomExpression = expressionsArray.at(randomNumberForExpressionType);

  let operatorType;
  if (randomNumberForExpressionType === 0) {
    operatorType = '+';
  } else if (randomNumberForExpressionType === 1) {
    operatorType = '*';
  } else {
    operatorType = '-';
  }

  const expression = `${firstNumber} ${operatorType} ${secondNumber}`;
  const result = [randomExpression, expression];
  return result;
}

export { getRandomExpressionAnswer };
