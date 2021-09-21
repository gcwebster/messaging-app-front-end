import React from "react";

import "./messageBubbleStyles.css";

const MessageBubbles = ({ messages, userId }) => {
  return (
    <div>
      {messages.map((message) => {
        const sender = message.sender === userId;
        return (
          <div className={sender ? "alignRight" : ""} key={message.text}>
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
