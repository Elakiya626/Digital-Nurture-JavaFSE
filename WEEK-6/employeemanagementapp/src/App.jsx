import EmployeeList from "./Components/EmployeeList";
import EmployeeDetails from "./Components/EmployeeDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management App</h1>

      <EmployeeList />

      <br />

      <EmployeeDetails />
    </div>
  );
}

export default App;