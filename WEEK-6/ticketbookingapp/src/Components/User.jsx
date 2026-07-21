function User() {
  return (
    <div>

      <h2>Welcome User</h2>

      <h3>Book Your Ticket</h3>

      <form>

        <input
          type="text"
          placeholder="Passenger Name"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Flight Number"
        />

        <br /><br />

        <button>
          Book Ticket
        </button>

      </form>

    </div>
  );
}

export default User;