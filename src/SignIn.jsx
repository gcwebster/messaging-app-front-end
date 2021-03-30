import React, { useState } from "react";
import axios from "axios";

const SignIn = ({ setAuthenticated, setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="App">
      <button
        onClick={() =>
          axios
            .get("http://localhost:8080/users")
            .then((res) => console.log("response from request: ", res.data))
        }
      >
        Test GET
      </button>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="email address"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
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
              // why can't error be displayed?
            );
        }}
      >
        Test POST
      </button>
    </div>
  );
};

export default SignIn;
