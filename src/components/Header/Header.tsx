import "../Components.css";
import { FaBars, FaSearch, FaBell } from "react-icons/fa";

function Header() {
  return (
    <nav className="nav-bar">
      {/* Sección izquierda */}
      <div className="left-section">
        <FaBars className="icon" />
        <img
          src="src/assets/ytlogo.png"
          alt="YouTube Music Logo"
          className="logo"
        />
        <h1 className="texto">Music</h1>
      </div>

      {/* Sección central */}
      <div className="center-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Sección derecha */}
      <div className="right-section">
        <FaBell className="icon" />
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="profile-pic"
        />
      </div>
    </nav>
  );
}

export default Header;
