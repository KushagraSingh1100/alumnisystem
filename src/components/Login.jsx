import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setshowPass] = useState(false);
  return (
    <div className="login">
      <div className="login-card">
        <h1>Login</h1>
        <form>
          <label>
            <h3>Username</h3>
            <input type="text" placeholder="Enter username" />
          </label>
          <label>
            <h3>Password</h3>
            <div className="password-field">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => {
                  setshowPass(!showPass);
                }}
              >
                <img
                  src={
                    showPass
                      ? require("../utils/hide.png")
                      : require("../utils/visibility.png")
                  }
                  alt=""
                />
              </button>
            </div>
            <div className="options">
            <Link to="/">
                <p>Return Home.</p>
              </Link>
              <Link to="/signup">
                <p>Don't have an account? Sign Up</p>
              </Link>
              <Link to="/forgot">
                <p>Forgot password ?</p>
              </Link>
            </div>
          </label>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
