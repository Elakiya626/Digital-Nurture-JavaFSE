import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      style={{
        backgroundColor: "#1976d2",
        padding: "15px"
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Home
      </Link>

      <Link
        to="/trainers"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Trainers
      </Link>
    </nav>
  );
}

export default Header;