import React, { useState } from "react";
import { signIn } from "./helper";

import "./signIn.css";

const SignIn = ({ setAuthenticated, setUser }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailOrPasswordMissing, setEmailOrPasswordMissing] = useState(false);
  const [error, setError] = useState(null);
  return (
    <div className="SignInPage">
      <form>
        <div className="signInOption">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="signInOption">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {emailOrPasswordMissing && (
          <p>Make sure you enter BOTH your email and password</p>
        )}
        {error && <p>{error}</p>}
      </form>
      <button
        onClick={() => {
          setAuthenticated(undefined);
          signIn(
            email,
            password,
            setAuthenticated,
            setUser,
            setError,
            setEmailOrPasswordMissing
          );
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          console.log("go to /register");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default SignIn;
