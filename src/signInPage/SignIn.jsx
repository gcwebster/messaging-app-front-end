import React, { useState } from "react";
import axios from "axios";

import "./signIn.css";

const SignIn = ({ setAuthenticated, setUser, authenticated }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
        {authenticated === false && <p>Error, user isn't present</p>}
      </form>
      <button
        onClick={() => {
          setAuthenticated(false);
          axios
            .post("http://localhost:8080/users", { user: email, password })
            .then(
              (res) => {
                const { data } = res;
                setAuthenticated(data.authenticated);
                setUser(data.user);
              },
              (err) => console.error("error in post call: ", err)
            );
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default SignIn;
