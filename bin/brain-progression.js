#!/usr/bin/env node

import runGame from '../src/index.js'

const description = 'What number is missing in the progression?'

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let index = 0; index < length; index += 1) {
    const currentElement = start + index * step;
    progression.push(currentElement);
  }

  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

runGame(description, generateRound);