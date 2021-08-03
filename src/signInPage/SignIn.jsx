import React, { useState } from "react";
import { signIn, register } from "./helper";

import "./signIn.css";

const SignIn = ({ setAuthenticated, setUser, authenticated }) => {
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
          if (email && password) {
            setEmailOrPasswordMissing(false);
            signIn(email, password, setAuthenticated, setUser, setError);
          } else {
            setEmailOrPasswordMissing(true);
          }
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          if (email && password) {
            setEmailOrPasswordMissing(false);
            register(email, password, setAuthenticated, setUser, setError);
          } else {
            setEmailOrPasswordMissing(true);
          }
        }}
      >
        Register
      </button>
    </div>
  );
};

export default SignIn;
