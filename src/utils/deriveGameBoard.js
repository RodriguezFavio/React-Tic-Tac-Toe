const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  });

  return gameBoard;
}
