function IndianPlayers() {

  const players = [
    "Virat Kohli",
    "Rohit Sharma",
    "KL Rahul",
    "Shubman Gill",
    "Hardik Pandya",
    "Ravindra Jadeja"
  ];

  // Destructuring
  const [player1, player2, ...others] = players;

  // Spread Operator
  const allPlayers = [...players, "Jasprit Bumrah", "Mohammed Shami"];

  return (
    <div>

      <h2>Odd Team Players</h2>

      <ul>
        {others.filter((_, index) => index % 2 === 0)
          .map((player, index) => (
            <li key={index}>{player}</li>
          ))}
      </ul>

      <h2>Even Team Players</h2>

      <ul>
        {[player1, player2]
          .map((player, index) => (
            <li key={index}>{player}</li>
          ))}
      </ul>

      <h2>Merged Players (Spread Operator)</h2>

      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

    </div>
  );
}

export default IndianPlayers;