import React from "react";

import "./messageBubbleStyles.css";

const MessageBubbles = ({ messages, user }) => {
  return (
    <div>
      {messages.map((message) => {
        const sender = message.sender === user;
        return (
          <div className={sender ? "alignRight" : ""}>
            <p className="messageBubble" id={sender ? "user" : "other"}>
              {message.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBubbles;
