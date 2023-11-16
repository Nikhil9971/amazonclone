import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/amazonlogo5.jpg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className="login_logo" />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="GET">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinbtn" onClick={signIn} type="submit">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>
        <span className="login_signuptext">New to Amazon?</span>
        <button className="login_signupbtn" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
