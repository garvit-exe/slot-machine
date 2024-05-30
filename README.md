# Slot Machine

This project implements a simple slot machine game in JavaScript. The game allows a user to deposit money, place bets on a specified number of lines, and spin the slot machine to try and win more money based on the symbols that appear.

## Features

- **Deposit Money:** User can enter an amount of money to deposit, which serves as their starting balance.
- **Choose Bet Lines:** User can choose how many lines (up to 3) they want to bet on.
- **Place Bets:** User can place a bet amount per line, ensuring the bet does not exceed their balance.
- **Spin the Slot Machine:** The slot machine generates random symbols for each of its three reels.
- **Check Winnings:** The game checks the generated symbols to determine if the user has won based on the matching symbols on the chosen lines.
- **Calculate Winnings:** User's winnings are calculated based on the symbols' values and the bet amount.
- **Repeat or End Game:** User can choose to play again as long as they have a positive balance, or they can end the game.

## Usage

1. Run the following commands in terminal:

   ```bash
   git clone https://github.com/garvit-exe/slot-machine.git
   cd slot-machine
   npm i
   node slot-machine.js

## Code Explanation

**1. Importing Dependencies:**

- The prompt-sync module is imported to handle user input via the console.

**2. Constants:**

- ROWS and COLS define the dimensions of the slot machine (3x3 grid).
- SYMBOLS_COUNT specifies the number of occurrences for each symbol (A, B, C, D) in the slot machine.
- SYMBOLS_VALUES assigns a value to each symbol, which is used to calculate winnings.

**3. Deposit Function:**

- Prompts the user to enter a deposit amount.
- Validates the input to ensure it's a positive number.
- Returns the valid deposit amount.

**4. Get Number of Lines Function:**

- Prompts the user to enter the number of lines they wish to bet on (1 to 3).
- Validates the input to ensure it's within the allowed range.
- Returns the valid number of lines.

**5. Get Bet Function:**

- Prompts the user to enter the bet amount per line.
- Validates the input to ensure it's a positive number and doesn't exceed the user's balance divided by the number of lines.
- Returns the valid bet amount.

**6. Spin Function:**

- Creates a list of symbols based on their counts.
- Generates random symbols for each column of the slot machine by selecting symbols from the list and removing them to avoid repetition.
- Returns the generated reels (columns).

**7. Transpose Function:**

- Converts the columns of the slot machine into rows to facilitate easier checking of winning lines.
- Returns the transposed rows.

**8. Print Rows Function:**

- Prints each row of the slot machine, joining the symbols with a separator (|).

**9. Get Winnings Function:**

- Calculates the user's winnings based on the bet amount and the number of winning lines.
- Checks if all symbols in a row are the same.
- Multiplies the bet amount by the value of the winning symbol to calculate the winnings for that row.
- Returns the total winnings.

**10. Main Game Function:**

- Gets the initial deposit amount from the user.
- Enters a loop where the game continues as long as the user has a positive balance.
- Prompts the user for the number of lines to bet on and the bet amount per line.
- Deducts the total bet from the user's balance.
- Spins the slot machine to generate the reels.
- Transposes the reels to rows and prints the rows.
- Calculates the winnings and updates the user's balance.
- Checks if the user's balance is zero or negative, ending the game if so.
- Prompts the user if they want to play again, and exits the loop if they choose not to.

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
