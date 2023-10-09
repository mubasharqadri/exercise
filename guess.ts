import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
  const minNumber = 1;
  const maxNumber = 100;
  const secretNumber = generateRandomNumber(minNumber, maxNumber);
  let attempts = 0;

  console.log('Welcome to the Guess the Number game!');
  console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}.`);

  function guess() {
    rl.question('Enter your guess: ', (input) => {
      const userGuess = parseInt(input);

      if (isNaN(userGuess)) {
        console.log('Please enter a valid number.');
      } else {
        attempts++;

        if (userGuess === secretNumber) {
          console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
          rl.close();
        } else if (userGuess < secretNumber) {
          console.log('Too low! Try again.');
          guess();
        } else {
          console.log('Too high! Try again.');
          guess();
        }
      }
    });
  }

  guess();
}

playGame();