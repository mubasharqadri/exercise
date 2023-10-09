import * as readline from 'readline';


// Generate random user data (replace with your data generation logic)
const userData = [
  { userId: 'user1', pin: '1234', balance: 1000 },
  { userId: 'user2', pin: '5678', balance: 2000 },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function authenticateUser(): Promise<string> {
  return new Promise((resolve) => {
    rl.question('Enter User ID: ', (userId) => {
      rl.question('Enter PIN: ', (pin) => {
        const user = userData.find((u) => u.userId === userId && u.pin === pin);
        if (user) {
          console.log('Authentication successful!');
          resolve(userId);
        } else {
          console.log('Authentication failed. Please try again.');
          resolve('');
        }
      });
    });
  });
}

function displayMenu(): Promise<number> {
  return new Promise((resolve) => {
    console.log('\nATM Menu:');
    console.log('1. Check Balance');
    console.log('2. Deposit');
    console.log('3. Withdraw');
    console.log('4. Exit');
    rl.question('Enter your choice: ', (choice) => {
      resolve(parseInt(choice));
    });
  });
}

async function main() {
  const userId = await authenticateUser();

  if (!userId) {
    rl.close();
    return;
  }

  while (true) {
    const choice = await displayMenu();

    switch (choice) {
      case 1:
        // Implement Check Balance functionality
        break;
      case 2:
        // Implement Deposit functionality
        break;
      case 3:
        // Implement Withdraw functionality
        break;
      case 4:
        console.log('Thank you for using the ATM. Goodbye!');
        rl.close();
        return;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}

main();
