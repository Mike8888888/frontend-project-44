import _ from 'lodash';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRaundData() {
  const randomNumber = _.random(10);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = randomNumber;
  const result = [question, correctAnswer];

  return result;
}

export default () => {
  runGame(description, getRaundData);
};
