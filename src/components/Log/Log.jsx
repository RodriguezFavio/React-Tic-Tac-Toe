import './Log.css';

export default function Log({ turns, players }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.column}`}>
          {players[turn.player]} selected row {turn.square.row + 1}, column{' '}
          {turn.square.column + 1}
        </li>
      ))}
    </ol>
  );
}
