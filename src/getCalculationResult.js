export default (firstNumber, secondNumber, operator) => {
  let answer;

  if (operator === '+') {
    answer = firstNumber + secondNumber;
  } else if (operator === '*') {
    answer = firstNumber * secondNumber;
  } else if (operator === '-') {
    answer = firstNumber - secondNumber;
  }
  return answer;
};
