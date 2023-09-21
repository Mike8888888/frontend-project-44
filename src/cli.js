/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const defaultHi = () => {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
