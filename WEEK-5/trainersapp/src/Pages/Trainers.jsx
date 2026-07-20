function Trainers() {

  const trainers = [
    "John",
    "David",
    "Priya",
    "Arun",
    "Kumar"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trainer List</h1>

      <ul>
        {trainers.map((trainer, index) => (
          <li key={index}>{trainer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Trainers;