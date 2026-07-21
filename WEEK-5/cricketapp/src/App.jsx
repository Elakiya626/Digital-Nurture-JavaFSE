import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  return (
    <div style={{ padding: "20px" }}>

      <h1>Cricket App</h1>

      <ListofPlayers />

      <hr />

      <IndianPlayers />

    </div>
  );
}

export default App;