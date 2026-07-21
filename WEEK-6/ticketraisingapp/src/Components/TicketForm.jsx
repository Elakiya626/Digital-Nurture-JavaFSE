import { useState } from "react";

function TicketForm() {

  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const refNo = Math.floor(Math.random() * 100000);

    alert(
      `Complaint Submitted Successfully!\n\nEmployee: ${employeeName}\nReference No: ${refNo}`
    );

    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h2>Ticket Raising App</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          rows="5"
          cols="30"
          placeholder="Enter Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

    </div>
  );
}

export default TicketForm;