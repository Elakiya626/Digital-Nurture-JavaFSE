function OfficeSpace() {

  const office = {
    name: "Tech Park Office",
    rent: 55000,
    address: "Bangalore"
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
        alt="Office"
        width="500"
      />

      <h2>Name : {office.name}</h2>

      <h3
        style={{
          color: office.rent <= 60000 ? "red" : "green"
        }}
      >
        Rent : ₹{office.rent}
      </h3>

      <h3>Address : {office.address}</h3>

    </div>
  );
}

export default OfficeSpace;