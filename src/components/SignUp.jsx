import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPass, setshowPass] = useState(false);
  return (
    <div className="signup">
      <div className="right">
        <div className="logo">
          <img src={require("../utils/logo.png")} alt="" />
          <h1>Alumni Portal</h1>
        </div>
        <div className="signup-card">
          <div className="heading">
            <h1>Sign Up</h1>
          </div>
          <div className="fields">
            <form autocomplete="on">
              <label>
                <h3>Name</h3>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="Enter your name"
                />
              </label>
              <label>
                <h3>Course</h3>
                <input
                  type="text"
                  placeholder="Select your course"
                  list="courses"
                />
                <datalist id="courses">
                  <option>B.Tech CSE</option>
                  <option>B.Tech AI</option>
                  <option>B.Tech ML</option>
                  <option>B.Tech DS</option>
                  <option>B.Arch</option>
                  <option>LLB</option>
                  <option>BCA</option>
                  <option>BBA</option>
                </datalist>
              </label>
              <label>
                <h3>Institue</h3>
                <input
                  type="text"
                  list="institutes"
                  placeholder="Select your institute"
                />
                <datalist id="institutes">
                  <option>Amity Lucknow</option>
                  <option>Amity Kolkata</option>
                  <option>Amity Jaipu</option>
                  <option>Amity Noida</option>
                  <option>Amity Dubai</option>
                </datalist>
              </label>
              <label>
                <h3>Passing Year</h3>
                <input
                  type="month"
                  required
                  placeholder="Enter your passing year"
                />
              </label>
              <label>
                <h3>Username</h3>
                <input
                  type="username"
                  required
                  placeholder="Enter a username"
                />
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
              </label>
              <label>
                <h3>Attach a copy of your marksheet or ID card</h3>
                <div className="file">
                  <input type="file" required />
                </div>
              </label>
              <div className="options">
                <Link to="/">
                  <p>Return Home.</p>
                </Link>
                <Link to="/login">
                  <p>Already have an account? Sign In</p>
                </Link>
              </div>
              <div className="button">
                <button className="signup-btn" type="submit">
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
