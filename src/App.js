import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authenticated, setAuthenticated] = useState();
  return (
    <div className="App">
      <button
        onClick={() =>
          axios
            .get("http://localhost:8080/")
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
          axios.post("http://localhost:8080/", { user: email, password }).then(
            (res) => {
              console.log("response from server is: ", res.data);
              setAuthenticated(res.data.authenticated);
            },
            (err) => console.error("error in post call: ", err)
            // why can't error be displayed?
          );
        }}
      >
        Test POST
      </button>
      <h1>You {authenticated ? "are" : "are not"} authenticated</h1>
      {authenticated && (
        <button onClick={() => console.log("secrets")}>
          Continue on with your journey
        </button>
      )}
    </div>
  );
}

export default App;
