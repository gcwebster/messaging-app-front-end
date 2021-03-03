import React, { useState, useEffect } from "react";
import axios from "axios";

import MessagePage from "./messagePage";
import SignIn from "./SignIn.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState();
  const [user, setUser] = useState();
  const [messages, setMessages] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/messages").then((res) => {
      setMessages(res.data.messages);
    });
  }, [user]);

  return (
    <>
      {!authenticated && (
        <SignIn setAuthenticated={setAuthenticated} setUser={setUser} />
      )}
      {authenticated && <MessagePage user={user} messages={messages} />}
    </>
  );
}

export default App;
