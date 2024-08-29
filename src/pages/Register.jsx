import { useState } from "react";
import "./Auth.css";

const Register = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      alert("Please enter both email and password");
      return;
    }
    console.log(name, email, password);

    setname("");
    setemail("");
    setpassword("");
  };
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="auth-button"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </button>
          <p className="auth-text">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
