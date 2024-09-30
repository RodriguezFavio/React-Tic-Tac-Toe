import { WINNING_COMBINATIONS } from './winning-combinations';

export default function deriveWinner(gameBoard, players) {
  let winner;

  WINNING_COMBINATIONS.forEach((combination) => {
    const symbols = combination.map(
      ({ row, column }) => gameBoard[row][column]
    );

    if (symbols.every((symbol) => symbol && symbol === symbols[0])) {
      winner = players[symbols[0]];
    }
  });

  return winner;
}
