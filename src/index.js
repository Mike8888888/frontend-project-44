/* eslint-disable spaced-comment */
import readlineSync from 'readline-sync';
import _ from 'lodash';
import getRandomExpressionAnswer from './brain-calc-support.js';

const roundsAmount = 3;

function getAnswer(expressionForQuestion) {
  return readlineSync.question(`Question: ${expressionForQuestion}\nYour answer: `);
}

function greeting(gameCondition) {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameCondition);

  return name;
}

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

function getNumberArrProgression(arrLenght) {
  const startNumber = _.random(2, 20);
  const numberArrProgression = [startNumber];
  const progressionStep = _.random(2, 5);

  for (let i = 0; i < arrLenght; i += 1) {
    numberArrProgression.push(numberArrProgression[i] + progressionStep);
  }
  return numberArrProgression;
}

function getHidedNumber(arrLenght) {
  return _.random(arrLenght - 1);
}

function startBrainEven() {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = greeting(gameCondition);

  for (let i = 0; i < roundsAmount; i += 1) {
    const randomNumber = _.random(10);

    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

    const answer = getAnswer(randomNumber);

    if (isEven === answer) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

function startBrainCalc() {
  const gameCondition = 'What is the result of the expression?';
  const name = greeting(gameCondition);

  for (let i = 0; i < roundsAmount; i += 1) {
    const [randomExpressionAnswer, expression] = getRandomExpressionAnswer();
    const answer = getAnswer(expression);

    if (randomExpressionAnswer.toString() === answer) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${randomExpressionAnswer}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

function startBrainGcd() {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const name = greeting(gameCondition);
  for (let i = 0; i < roundsAmount; i += 1) {
    const randomNumber1 = _.random(1, 14);
    const randomNumber2 = _.random(1, 20);
    const answer = getAnswer(`${randomNumber1} ${randomNumber2}`);
    const correctAnswer = getGcdAnswer(randomNumber1, randomNumber2);

    if (answer === correctAnswer.toString()) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

function startBrainProgression() {
  const gameCondition = 'What number is missing in the progression?';
  const name = greeting(gameCondition);
  const arrLenght = 10;

  for (let i = 0; i < roundsAmount; i += 1) {
    const numberArrProgression = getNumberArrProgression(arrLenght);
    const hidedNumberIndex = getHidedNumber(arrLenght);
    const hidedNumber = numberArrProgression[hidedNumberIndex];
    numberArrProgression[hidedNumberIndex] = '..';
    const answer = getAnswer(numberArrProgression.join(' '));

    if (answer === hidedNumber.toString()) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${hidedNumber}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

function startBrainPrime() {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = greeting(gameCondition);
  const primeArray = getPrimeArray();
  for (let i = 0; i < roundsAmount; i += 1) {
    const randomNumber = _.random(1, 100);
    const answer = getAnswer(randomNumber);
    const isPrime = primeArray.find((Element) => Element % randomNumber === 0) ? 'yes' : 'no';

    if (answer === isPrime) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrime}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export {
  startBrainEven, startBrainCalc, startBrainGcd, startBrainProgression, startBrainPrime,
};
