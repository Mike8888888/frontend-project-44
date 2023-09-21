/* eslint-disable spaced-comment */
import readlineSync from 'readline-sync';
import _ from 'lodash';
import { getRandomExpressionAnswer } from './brain-calc-support.js';

const roundsAmount = 3;

const getAnswer = (expressionForQuestion) => readlineSync.question(`Question: ${expressionForQuestion}\nYour answer: `);

function greeting(gameCondition) {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameCondition);
  return name;
}

function brainEven() {
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

function brainCalc() {
  const gameCondition = 'What is the result of the expression?';
  const name = greeting(gameCondition);

  for (let i = 0; i < roundsAmount; i += 1) {
    const [randomExpressionAnswer, expression] = getRandomExpressionAnswer();
    const answer = getAnswer(expression);

    if (randomExpressionAnswer.toString() === answer) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${randomExpressionAnswer}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

function brainGcd() {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const name = greeting(gameCondition);
  for (let i = 0; i < roundsAmount; i += 1) {
    let randomNumber1 = _.random(1, 14);
    let randomNumber2 = _.random(1, 20);
    let correctAnswer;

    const answer = getAnswer(`${randomNumber1} ${randomNumber2}`);
    if (randomNumber1 === randomNumber2) {
      correctAnswer = randomNumber1;
    } else {
      while (randomNumber1 !== 0 && randomNumber2 !== 0) {
        if (randomNumber1 > randomNumber2) {
          randomNumber1 %= randomNumber2;
        } else {
          randomNumber2 %= randomNumber1;
        }
        correctAnswer = randomNumber1 + randomNumber2;
      }
    }

    if (answer === correctAnswer.toString()) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

function brainProgression() {
  const gameCondition = 'What number is missing in the progression?';
  const name = greeting(gameCondition);
  const arrLenght = 10;

  for (let i = 0; i < roundsAmount; i += 1) {
    const startNumber = _.random(2, 20);
    const numberArrProgression = [startNumber];
    const progressionStep = _.random(2, 5);

    for (let j = 0; j < arrLenght; j += 1) {
      numberArrProgression.push(numberArrProgression[j] + progressionStep);
    }

    const hidedNumberIndex = _.random(arrLenght - 1);
    const hidedNumber = numberArrProgression[hidedNumberIndex];
    numberArrProgression[hidedNumberIndex] = '..';
    const answer = getAnswer(numberArrProgression.join(' '));

    if (answer === hidedNumber.toString()) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${hidedNumber}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
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

function brainPrime() {
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
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrime}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export {
  brainEven, brainCalc, brainGcd, brainProgression, brainPrime,
};
