import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "./SignIn.jsx";

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";

import { saveMessages } from "./redux/Messages/message.actions";

function App(props) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/messages/${user}`).then((res) => {
      console.log("user is: ", user);
      props.saveMessages(res?.data?.messages);
      history.push("/messages");
    });
  }, [user]);

  return (
    <>
      <h1>
        Why do I have to allow POST in CORS (express index.js) but not GET?
      </h1>
      {!authenticated && (
        <SignIn setAuthenticated={setAuthenticated} setUser={setUser} />
      )}
      <div className="App">
        <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </div>

      <button onClick={() => props.saveMessages()}>Save Messages</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    messages: state.messages.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),

    saveMessages: (payload) => dispatch(saveMessages(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
