import readlineSync from 'readline-sync';
import _ from 'lodash';

const roundsAmount = 3;

const brainEven = () => {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < roundsAmount; i += 1) {
    const randomNumber = _.random(10);
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

    if (isEven === answer) {
      console.log('Correct');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven}".\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export { brainEven };
