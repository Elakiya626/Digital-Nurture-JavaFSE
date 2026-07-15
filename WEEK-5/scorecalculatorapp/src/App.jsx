import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Elakiya"
        School="Kongu Engineering College"
        Total={480}
        goal={6}
      />
    </div>
  );
}

export default App;