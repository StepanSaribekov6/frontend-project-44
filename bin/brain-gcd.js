import runGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
    let x = a;
    let y = b;

    while(y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
};

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGcd(number1, number2));

  return [question, correctAnswer];
};

runGame(description, generateRound);