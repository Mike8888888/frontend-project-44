import _ from 'lodash';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

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

function getRaundData() {
  const arrLenght = 10;
  const numberArrProgression = getNumberArrProgression(arrLenght);
  const hidedNumberIndex = getHidedNumber(arrLenght);
  const correctAnswer = numberArrProgression[hidedNumberIndex];
  numberArrProgression[hidedNumberIndex] = '..';
  const question = numberArrProgression.join(' ');
  const result = [question, correctAnswer];
  return result;
}

export default () => {
  runGame(description, getRaundData);
};
