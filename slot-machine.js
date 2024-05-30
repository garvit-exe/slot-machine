const prompt = require("prompt-sync")(); // Import the prompt-sync module for user input

const ROWS = 3; // Number of rows in the slot machine
const COLS = 3; // Number of columns in the slot machine

// Define the count of each symbol in the slot machine
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

// Define the value of each symbol for calculating winnings
const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// Function to get the deposit amount from the user
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: "); // Prompt user for deposit amount
    const numberDepositAmount = parseFloat(depositAmount); // Convert input to a number

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      // Check if input is valid
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount; // Return valid deposit amount
    }
  }
};

// Function to get the number of lines the user wants to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt(
      `Enter the number of lines you'll like to bet on (1-${ROWS}): ` // Prompt user for number of lines
    );
    const numberOfLines = parseInt(lines); // Convert input to an integer

    if (isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > ROWS) {
      // Check if input is valid
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines; // Return valid number of lines
    }
  }
};

// Function to get the bet amount per line from the user
const getBet = (balance, numberOfLines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: "); // Prompt user for bet amount per line
    const numberBet = parseFloat(bet); // Convert input to a number

    if (
      isNaN(numberBet) ||
      numberBet <= 0 ||
      numberBet > balance / numberOfLines // Check if bet is valid based on user's balance
    ) {
      console.log("Invalid bet, try again.");
    } else {
      return numberBet; // Return valid bet amount
    }
  }
};

// Function to spin the slot machine and generate the symbols in each column
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    // Create a list of symbols based on their counts
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];

    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length); // Pick a random symbol
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1); // Remove selected symbol to avoid repetition
    }
  }

  return reels; // Return the generated reels
};

// Function to transpose the reels array (convert columns to rows)
const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows; // Return transposed array
};

// Function to print the rows of the slot machine
const printRows = (rows) => {
  for (const row of rows) {
    console.log(row.join(" | ")); // Join symbols with ' | ' and print the row
  }
};

// Function to calculate the winnings based on the bet and the winning lines
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    if (symbols.every((symbol) => symbol === symbols[0])) {
      // Check if all symbols in a row are the same
      winnings += bet * SYMBOLS_VALUES[symbols[0]]; // Calculate winnings for that row
    }
  }
  return winnings; // Return total winnings
};

// Main game function
const game = () => {
  let balance = deposit(); // Get initial deposit from user

  while (true) {
    console.log(`You have a balance of $${balance}`);
    const numberOfLines = getNumberOfLines(); // Get number of lines to bet on
    const bet = getBet(balance, numberOfLines); // Get bet amount per line

    balance -= bet * numberOfLines; // Deduct the total bet from balance

    const reels = spin(); // Spin the slot machine
    const rows = transpose(reels); // Transpose reels to rows

    printRows(rows); // Print the rows

    const winnings = getWinnings(rows, bet, numberOfLines); // Calculate winnings
    balance += winnings; // Add winnings to balance
    console.log(`You won $${winnings}`);

    if (balance <= 0) {
      // Check if balance is zero or negative
      console.log("You ran out of money");
      break;
    }

    const playAgain = prompt("Do you want to play again? (y/n) "); // Ask user if they want to play again
    if (playAgain.toLowerCase() !== "y") break; // Break loop if user doesn't want to play again
  }
};

game(); // Start the game
