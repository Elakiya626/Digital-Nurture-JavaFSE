import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <>
      <CohortDetails
        title="React Development"
        startDate="15 July 2026"
        status="Ongoing"
        coach="Mr. John"
        trainer="Mr. David"
      />

      <CohortDetails
        title="Java Full Stack"
        startDate="01 June 2026"
        status="Completed"
        coach="Mrs. Priya"
        trainer="Mr. Arun"
      />
    </>
  );
}

export default App;