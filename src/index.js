import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

function runGame(description, getRaundData) {
  const roundsAmount = 3;
  const name = greeting();
  console.log(description);

  for (let i = 0; i < roundsAmount; i += 1) {
    const [question, answer] = getRaundData();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === answer.toString()) {
      console.log('Correct');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
}

export default runGame;
