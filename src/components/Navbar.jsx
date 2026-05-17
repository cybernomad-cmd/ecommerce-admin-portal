import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⚡vitukali
      </div>
      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/add-product">
          + Add Product
        </Link>

      </div>
    </nav>
  );
}

<button onClick={() => setDarkMode(!darkMode)}>
  Toggle Theme
</button>

export default Navbar;