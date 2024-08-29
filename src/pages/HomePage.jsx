import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-brand">MyWebsite</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <header className="hero-section">
        <h1>Welcome to MyWebsite</h1>
        <h1>Welcome {parsedUser?.email} </h1>
        <p>
          Your one-stop solution for all your needs. We provide high-quality
          services that you can trust.
        </p>
        <button className="cta-button">Get Started</button>
      </header>
    </div>
  );
};

export default HomePage;
