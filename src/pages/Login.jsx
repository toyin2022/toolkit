// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetLogin } from "../store/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email, password }));
    dispatch(SetLogin({ email, password }));
    toast("Login successfully");
    navigate("/");
    setemail("");
    setpassword("");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form>
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
            Login
          </button>

          <p className="auth-text">
            {"Don't"} have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
