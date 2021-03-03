import React from "react";

import TitleRow from "./titleRow";
import MessageBubbles from "./messageBubbles";
import Footer from "./footer";

import "./messagePageStyles.css";

const MessagePage = ({ user, messages }) => (
  <div id="container">
    <div id="messagingAppContainer">
      <TitleRow user={user} />
      <div id="messagingBody">
        <MessageBubbles messages={messages} user={user} />
      </div>
      <Footer />
    </div>
  </div>
);

export default MessagePage;
