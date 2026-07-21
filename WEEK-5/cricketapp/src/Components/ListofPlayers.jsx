function ListofPlayers() {

  const players = [
    "Virat Kohli",
    "Rohit Sharma",
    "KL Rahul",
    "Shubman Gill",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "R Ashwin",
    "Jasprit Bumrah",
    "Mohammed Shami",
    "Mohammed Siraj",
    "Ishan Kishan"
  ];

  return (
    <div>
      <h2>List of Players</h2>

      <ol>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ol>
    </div>
  );
}

export default ListofPlayers;