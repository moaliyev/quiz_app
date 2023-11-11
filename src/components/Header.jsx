import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <nav className="navBar">
            <ul className="navList">
              <li className="logo">
                <img src={Logo} alt="logo" />
              </li>
              <li className="navItem">
                <Link to="/">Learn</Link>
              </li>
              <li className="navItem">
                <Link>Leaderboards</Link>
              </li>
            </ul>
          </nav>
          <div className="auth">
            <Link>Register</Link>
            <Link>Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
