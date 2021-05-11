import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "./signInPage/SignIn.jsx";

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";

import { saveMessages, setUser } from "./redux/Messages/message.actions";

function App(props) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState();
  const [user, setUser] = useState();
  const [showRedux, setShowRedux] = useState();

  useEffect(() => {
    if (user !== undefined) {
      axios.get(`http://localhost:8080/messages?user=${user}`).then((res) => {
        console.log("user is: ", user);
        props.saveMessages(res?.data?.messages);
        props.setUser(user);
        if (authenticated) history.push("/messages");
      });
    }
  }, [user]);

  return <SignIn setAuthenticated={setAuthenticated} setUser={setUser} />;
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  messages: state.messages.messages,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increaseCounter()),

  decreaseCounter: () => dispatch(decreaseCounter()),

  saveMessages: (payload) => dispatch(saveMessages(payload)),

  setUser: (payload) => dispatch(setUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
